import DatauriParser from 'datauri/parser';
import path from 'path';
import Cloudinary from './cloudinary';

const createImage = async (img: any) => {
    const parser = new DatauriParser();
    const base64Image = parser.format(path.extname(img.originalname).toString(), img.buffer);
    if (!base64Image.content) return null;
    const { secure_url } = await Cloudinary.upload(base64Image.content);
    return secure_url;
};

export default createImage;
