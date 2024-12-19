import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { ClubDatabase } from './clubs.database';
import { unit } from '../../unit/entities/unit.entity';
import { club } from '../entities/club.entity';

@Injectable()
export class ClubsRepository extends BaseRepository implements ClubDatabase {
  constructor(
    @InjectModel(club) clubsRepository: typeof club,
  ) {
    super(clubsRepository, 'CLUBS')
  }

  public findOneClubWithUnits(id: string): any {
    return this.repository.findOne({
      where: { id },
      attributes: ['id', 'name'],
      include: [
        {
          model: unit,
          attributes: ['id', 'name'],
          required: true,
          where: {
            club_id: id,
            deletedAt: null,
          },
          paranoid: false,
          raw: false,
        },
      ],
      raw: false,
    });
  }
}
