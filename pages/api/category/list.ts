import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        const { currentUser } = await serverAuth(req, res);

        const categories = await prismadb.category.findMany({
            where: {
                userId: currentUser.id,
            },
        });

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
