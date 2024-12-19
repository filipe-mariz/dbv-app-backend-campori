import { Module } from '@nestjs/common';
import { PathfindersService } from './pathfinders.service';
import { PathfindersController } from './pathfinders.controller';
import { pathfinder } from './entities/pathfinder.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { PathfinderDatabase } from './database/pathfinders.database';
import { PathfindersRepository } from './database/pathfinders.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([pathfinder]),
    DatabaseModule,
  ],
  controllers: [PathfindersController],
  providers: [
    PathfindersService,
    {
      provide: 'CLUBS_REPOSITORY',
      useValue: pathfinder,
    },
    {
      provide: PathfinderDatabase,
      useClass: PathfindersRepository
    }
  ],
  exports: [SequelizeModule]
})
export class PathfindersModule {}
