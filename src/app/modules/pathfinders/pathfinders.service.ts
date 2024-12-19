import { Injectable } from '@nestjs/common';
import { PathfinderDatabase } from './database/pathfinders.database';

@Injectable()
export class PathfindersService {
  constructor(
    private readonly database: PathfinderDatabase
  ) {}

  findAll() {
    return this.database.findAll()
  }
}
