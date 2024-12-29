import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

const Upload = () => {
	return {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, file, callback) => {
				const uniqueSuffix = `${req.headers.name}_payment`
				callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
			},
		}),
		fileFilter: (req, file, callback) => {
			const allowedMimeTypes = [
				'image/jpeg',
				'image/png',
				'image/gif',
				'image/webp',
				'image/bmp',
				'image/tiff',
				'image/svg+xml',
				'text/plain',
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'application/vnd.oasis.opendocument.text',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'application/vnd.ms-excel',
			];

			if (allowedMimeTypes.includes(file.mimetype)) {
				callback(null, true);
			} else {
				callback(
					new HttpException(
						'Only image and text files are allowed!',
						HttpStatus.BAD_REQUEST,
					),
					false,
				);
			}
		},
	};
}

export default Upload;