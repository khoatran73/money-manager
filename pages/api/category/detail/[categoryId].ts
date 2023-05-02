import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }
        const { currentUser } = await serverAuth(req, res);
        const { categoryId } = req.query;

        if (typeof categoryId !== 'string') {
            throw new Error('Invalid Id');
        }

        if (!categoryId) {
            throw new Error('Missing Id');
        }

        const category = await prismadb.category.findUnique({
            where: {
                id: categoryId,
            },
        });

        if (!category) {
            throw new Error('Category not exist');
        }

        if (category.userId !== currentUser.id) {
            throw new Error('Not your category');
        }

        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
