import { Controller, Body, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BoardService } from './board.service';
import { CreateBoardByScreenDto, CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public bulkCreatebyFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateBoardDto
  ) {
    return this.boardService.create({ file, body })
  }

  @Post()
  public bulkCreatebyScreen(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Array<CreateBoardByScreenDto>
  ) {
    return this.boardService.create({ file, body })
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.boardService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
  //   return this.boardService.update(+id, updateBoardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.boardService.remove(+id);
  // }
}
