import { Injectable } from '@nestjs/common';
import { ClubDatabase } from './clubs.database';
import { BaseRepository } from 'src/app/base/base.repository';
import { InjectModel } from '@nestjs/sequelize';
import { club } from '../entities/club.entity';

@Injectable()
export class ClubsRepository extends BaseRepository implements ClubDatabase {
  constructor(
    @InjectModel(club) clubsRepository: typeof club
  ) {
    super(clubsRepository, 'USERS')
  }
}
