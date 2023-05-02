import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end();
        }

        const { name, code, symbol, exchangeRate, writtingStyle, countryId } = req.body;

        const existingCurrency = await prismadb.currency.findUnique({
            where: { OR: [{ code: code }, { symbol: symbol }] },
        });

        if (existingCurrency) {
            return res.status(422).json({ error: 'Code or Symbol taken' });
        }

        const currency = await prismadb.currency.create({
            data: {
                name,
                code,
                symbol,
                exchangeRate,
                writtingStyle,
                countryId,
            },
        });

        return res.status(200).json(currency);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
