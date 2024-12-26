import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { UnitDatabase } from './database/unit.database';

@Injectable()
export class UnitService {
  constructor(
    private readonly database: UnitDatabase
  ) {}

  create(createUnitDto: CreateUnitDto) {
    console.log(createUnitDto)
    return this.database.create(createUnitDto)
  }

  async findAll(clubId: string) {
    return this.database.findByWhere({ club_id: clubId }, ['id', 'name']);
  }
}
