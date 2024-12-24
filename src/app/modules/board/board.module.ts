import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { board } from './entities/board.entity';
import { BoardDatabase } from './database/board.database';
import { BoardRepository } from './database/board.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([board]),
    DatabaseModule,
  ],
  controllers: [BoardController],
  providers: [
    BoardService,
    {
      provide: 'UNIT_REPOSITORY',
      useValue: board,
    },
    {
      provide: BoardDatabase,
      useClass: BoardRepository
    }
  ],
  exports: [SequelizeModule]
})
export class BoardModule {}
