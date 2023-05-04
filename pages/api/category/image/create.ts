import nc from 'next-connect';
import path from 'path';
import multer from 'multer';
import DatauriParser from 'datauri/parser';
import { NextApiRequest, NextApiResponse } from 'next';
import createImage from '@/utils/createImage';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

const handler = nc({
    onError: (res) => {
        res.status(500).end('Something broke!');
    },
    onNoMatch: (req, res) => {
        // @ts-ignore
        res.status(404).end('Page is not found');
    },
})
    .use(multer().any())
    .post<NextApiRequest, NextApiResponse>(async (req, res) => {
        try {
            const { name } = req.body;
            const { currentUser } = await serverAuth(req, res);

            //@ts-ignore
            const image = req.files?.filter((file) => file.fieldname === 'image')?.[0];
            const imageUrl = await createImage(image);

            if (!imageUrl) {
                throw new Error('Upload file error!');
            }

            const { code } = (await prismadb.categoryImage.findFirst({
                orderBy: {
                    createdAt: 'desc',
                },
            })) || { code: 0 };

            const categoryImage = await prismadb.categoryImage.create({
                data: {
                    name,
                    code: code + 1,
                    image: imageUrl,
                    createdById: currentUser?.id,
                },
            });

            return res.status(200).json({ data: categoryImage, message: 'success' });
        } catch (error) {
            return res.status(400).json({ error: `Something went wrong: ${error}` });
        }
    });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
