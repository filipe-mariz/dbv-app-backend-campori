import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { ClubDatabase } from './database/clubs.database';
import { ClubsRepository } from './database/clubs.repository';
import { club } from './entities/club.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    SequelizeModule.forFeature([club]),
    DatabaseModule,
  ],
  controllers: [ClubsController],
  providers: [
    ClubsService,
    {
      provide: 'CLUBS_REPOSITORY',
      useValue: club,
    },
    {
      provide: ClubDatabase,
      useClass: ClubsRepository
    }
  ],
  exports: [SequelizeModule]
})
export class ClubsModule {}
