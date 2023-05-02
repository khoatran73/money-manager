import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end();
        }

        const { name, image } = req.body;
        const country = await prismadb.country.create({ data: { name, image } });

        return res.status(200).json(country);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
