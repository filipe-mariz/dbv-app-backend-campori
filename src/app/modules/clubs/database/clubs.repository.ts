import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { ClubDatabase } from './clubs.database';
import { unit } from '../../unit/entities/unit.entity';
import { club } from '../entities/club.entity';
import { pathfinder } from '../../pathfinders/entities/pathfinder.entity';
import { board } from '../../board/entities/board.entity';

@Injectable()
export class ClubsRepository extends BaseRepository implements ClubDatabase {
  constructor(
    @InjectModel(club) clubsRepository: typeof club,
  ) {
    super(clubsRepository, 'CLUBS')
  }

  public findOneClubWithUnits(id: string): any {
    const defaultOptions = {
      paranoid: false,
      raw: false,
      required: true,
      where: {
        club_id: id,
        deletedAt: null,
      }
    }

    return this.repository.findOne({
      where: { id },
      attributes: ['id', 'name'],
      include: [
        {
          model: unit,
          attributes: ['id', 'name'],
          ...defaultOptions,
          include: [{
            model: pathfinder,
            attributes: ['id', 'name', 'cpf', 'bornDate', 'responsibleName', 'responsiblePhone'],
            ...defaultOptions
          }]
        },
        {
          model: board,
          attributes: ['id', 'name', 'cpf', 'bornDate', 'position'],
          ...defaultOptions
        }
      ],
      raw: false,
    });
  }
}
