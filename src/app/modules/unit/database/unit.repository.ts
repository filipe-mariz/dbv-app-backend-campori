import { Injectable } from '@nestjs/common';
import { UnitDatabase } from './unit.database';
import { BaseRepository } from 'src/app/base/base.repository';
import { InjectModel } from '@nestjs/sequelize';
import { unit } from '../entities/unit.entity';

@Injectable()
export class UnitRepository extends BaseRepository implements UnitDatabase {
  constructor(
    @InjectModel(unit) cunitsRepository: typeof unit
  ) {
    super(cunitsRepository, 'UNITS')
  }
}
