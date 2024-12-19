import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { PathfinderDatabase } from './pathfinders.database';
import { pathfinder } from '../entities/pathfinder.entity'

@Injectable()
export class PathfindersRepository extends BaseRepository implements PathfinderDatabase {
  constructor(
    @InjectModel(pathfinder) pathfindersRepository: typeof pathfinder,
  ) {
    super(pathfindersRepository, 'pathfinders')
  }
}
