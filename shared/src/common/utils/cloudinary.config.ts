import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    // allowedFormats: ['jpg', 'png'],
    // format: async (req, file) => {
    //     const ext = file.mimetype.split("/")[1];
    //     return ["jpg", "png", "webp"].includes(ext) ? ext : "jpg";
    // },
    // filename: function (
    //     _req: Express.Request,
    //     file: Express.Multer.File,
    //     cb: (arg0: null | unknown, arg1: string) => void
    // ) {
    //     cb(null, file.originalname);
    // }
  }
});

export const uploadCloud = multer({ storage });
