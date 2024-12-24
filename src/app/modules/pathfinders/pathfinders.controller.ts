import { Controller, Body, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PathfindersService } from './pathfinders.service';
import { CreatePathfinderDto } from './dto/create-pathfinder.dto';

@Controller('pathfinders')
export class PathfindersController {
  constructor(private readonly pathfindersService: PathfindersService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreatePathfinderDto
  ) {
    return this.pathfindersService.bulkCreate({ file, body })
  }


  @Get()
  findAll() {
    return this.pathfindersService.findAll();
  }
}
