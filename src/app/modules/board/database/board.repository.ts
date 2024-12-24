import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { BoardDatabase } from './board.database';
import { board } from '../entities/board.entity'

@Injectable()
export class BoardRepository extends BaseRepository implements BoardDatabase {
  constructor(
    @InjectModel(board) boardsRepository: string
  ) {
    super(boardsRepository, 'boards')
  }
}
