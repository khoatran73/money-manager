import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        const { currentUser } = await serverAuth(req, res);

        const cateImages = await prismadb.categoryImage.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const combo = cateImages.map((cateImg) => ({
            value: cateImg.id,
            label: cateImg.image
        }))

        return res.status(200).json({ data: combo, status: 200 });
    } catch (error) {
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
};

export default handler;
