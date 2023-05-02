import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).end();
        }
        const { type, amount, date, description, categoryId } = req.body;
        const { currentUser } = await serverAuth(req, res);
        const { transactionId } = req.query;

        if (typeof transactionId !== 'string') {
            throw new Error('Invalid Id');
        }

        if (!transactionId) {
            throw new Error('Missing Id');
        }

        const transaction = await prismadb.transaction.findUnique({
            where: {
                id: transactionId,
            },
        });

        if (!transaction) {
            throw new Error('Transaction not exist');
        }

        if (transaction.userId !== currentUser.id) {
            throw new Error('Not your transaction');
        }

        const updatedTransaction = await prismadb.transaction.update({
            where: {
                id: transaction.id,
            },
            data: {
                type,
                amount,
                date,
                description,
                categoryId,
            },
        });

        return res.status(200).json(updatedTransaction);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
