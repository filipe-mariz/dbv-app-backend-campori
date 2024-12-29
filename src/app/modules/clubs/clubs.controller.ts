import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import Upload from 'src/utils/fileUpload';

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
