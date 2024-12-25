import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';

import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { ClubsRepository } from './database/clubs.repository';
import { ClubDatabase } from './database/clubs.database';
import { club } from './entities/club.entity';

import { UnitService } from '../unit/unit.service';
import { UnitRepository } from '../unit/database/unit.repository';
import { UnitDatabase } from '../unit/database/unit.database';
import { unit } from '../unit/entities/unit.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([club, unit]),
    DatabaseModule,
  ],
  controllers: [ClubsController],
  providers: [
    ClubsService,
    UnitService,
    { provide: 'CLUBS_REPOSITORY', useValue: club },
    { provide: ClubDatabase, useClass: ClubsRepository },
    { provide: 'UNIT_REPOSITORY', useValue: unit },
    { provide: UnitDatabase, useClass: UnitRepository }
  ],
  exports: [SequelizeModule]
})
export class ClubsModule { }
