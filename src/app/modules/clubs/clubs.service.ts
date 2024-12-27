import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { ClubDatabase } from './database/clubs.database';
import { UnitDatabase } from '../unit/database/unit.database';
import generateRandomNumber from 'src/utils/codeGenerator';

@Injectable()
export class ClubsService {
  constructor(
    private readonly clubDatabase: ClubDatabase,
    private readonly unitDatabase: UnitDatabase
  ) {}

   public async create(createClubDto: CreateClubDto) {
    const createClub = await this.clubDatabase.create(createClubDto);
    const createUnit = await this.unitDatabase.create({
      id: generateRandomNumber(),
      name: 'DIRECAO',
      club_id: createClubDto.id
    });

    return {
      club: createClub,
      unit: createUnit
    }
  }

  public uploadPaymentFile(id: string, file: any) {
    console.log('data', {
      id, file
    })
  }

  async findAll() {
    const resp = await this.clubDatabase.findAll();
    return resp.map((data: any) => ({
      id: data.id,
      name: data.name
    }))
  }

  async findOne(id: string) {
    return this.clubDatabase.findOneClubWithUnits(id);
  }
}
