import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PathfindersService } from './pathfinders.service';

@Controller('pathfinders')
export class PathfindersController {
  constructor(private readonly pathfindersService: PathfindersService) {}

  @Get()
  findAll() {
    return this.pathfindersService.findAll();
  }
}
