import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { ClubDatabase } from './database/clubs.database';

@Injectable()
export class ClubsService {
  constructor(
    private readonly database: ClubDatabase
  ) {}

  create(createClubDto: CreateClubDto) {
    return this.database.create(createClubDto)
  }

  async findAll() {
    const resp = await this.database.findAll();
    return resp.map((data: any) => ({
      id: data.id,
      name: data.name
    }))
  }

  async findOne(id: string) {
    return this.database.findOneClubWithUnits(id);
  }
}
