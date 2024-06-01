import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end();
        }
        const { name, index, type, imageId, parentId } = req.body;
        let level = 0;
        const { currentUser } = await serverAuth(req, res);

        if (parentId) {
            level =
                (
                    await prismadb.category.findUnique({
                        where: {
                            id: parentId,
                        },
                        select: {
                            level: true,
                        },
                    })
                )?.level || level;
        }

        const category = await prismadb.category.create({
            data: {
                name,
                level,
                index,
                type,
                imageId,
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
