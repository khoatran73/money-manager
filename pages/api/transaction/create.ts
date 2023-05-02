import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end();
        }
        const { type, amount, date, description, categoryId } = req.body;
        const { currentUser } = await serverAuth(req, res);

        const transaction = await prismadb.transaction.create({
            data: {
                type,
                amount,
                date,
                description,
                categoryId,
                userId: currentUser?.id,
            },
        });

        return res.status(200).json(transaction);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
