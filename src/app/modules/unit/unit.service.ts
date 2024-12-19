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
    return this.database.create(createUnitDto)
  }

  async findAll() {
    const resp = await this.database.findAll();
    return resp.map((data: any) => ({
      id: data.id,
      name: data.name,
      club_id: data.club_id
    }))
  }
}
