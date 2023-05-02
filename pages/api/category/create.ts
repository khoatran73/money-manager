import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end();
        }
        const { name, iconStr, color, backgroundColor, level, index, type, parentId } = req.body;
        const { currentUser } = await serverAuth(req, res);

        const category = await prismadb.category.create({
            data: {
                name,
                iconStr,
                color,
                backgroundColor,
                level,
                index,
                type,
                parentId,
                userId: currentUser?.id,
            },
        });

        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
