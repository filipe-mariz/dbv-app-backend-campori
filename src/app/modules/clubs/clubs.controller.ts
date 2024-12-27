import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export function Upload() {
  return {
    storage: diskStorage({
      destination: './uploads', // Diretório onde os arquivos serão salvos
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, callback) => {
      // Lista de tipos MIME permitidos para imagens e textos
      const allowedMimeTypes = [
        'image/jpeg',  // JPG
        'image/png',   // PNG
        'image/gif',   // GIF
        'image/webp',  // WEBP
        'image/bmp',   // BMP
        'image/tiff',  // TIFF
        'image/svg+xml', // SVG
        'text/plain',  // TXT
        'application/pdf', // PDF
        'application/msword', // DOC
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
        'application/vnd.oasis.opendocument.text', // ODT
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX
        'application/vnd.ms-excel', // XLS
      ];

      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true); // Aceita o arquivo
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

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubsService.create(createClubDto);
  }

  @Post('/payment')
  @UseInterceptors(FileInterceptor('file', Upload()))
  upload(
    @Body() createClubDto: CreateClubDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.clubsService.uploadPaymentFile(createClubDto.id, file);
  }

  @Get()
  findAll() {
    return this.clubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubsService.findOne(id);
  }
}
