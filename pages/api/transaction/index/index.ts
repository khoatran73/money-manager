import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }
        const { currentUser } = await serverAuth(req, res);

        const transactions = await prismadb.transaction.findMany({
            where: {
                userId: currentUser.id,
            },
            orderBy: {
                date: 'asc',
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        email: true,
                    },
                    include: {
                        currency: true,
                    },
                },
                // category: {

                // }
            },
        });

        return res.status(200).json(transactions);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
