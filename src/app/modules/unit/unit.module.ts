import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { unit } from './entities/unit.entity';
import { UnitDatabase } from './database/unit.database';
import { UnitRepository } from './database/unit.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([unit]),
    DatabaseModule,
  ],
  controllers: [UnitController],
  providers: [
    UnitService,
    {
      provide: 'UNIT_REPOSITORY',
      useValue: unit,
    },
    {
      provide: UnitDatabase,
      useClass: UnitRepository
    }
  ],
  exports: [SequelizeModule]
})
export class UnitModule {}
