import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { PathfinderDatabase } from './pathfinders.database';
import { pathfinder } from '../entities/pathfinder.entity'
import { IPantfinders } from '../dto/create-pathfinder.dto';

@Injectable()
export class PathfindersRepository extends BaseRepository implements PathfinderDatabase {
  constructor(
    @InjectModel(pathfinder) pathfindersRepository: string
  ) {
    super(pathfindersRepository, 'pathfinders')
  }

  bulkCreate(data: Array<IPantfinders>) {
    return this.repository.bulkCreate(data, {
      ignoreDuplicates: true,
    })
  }
}
