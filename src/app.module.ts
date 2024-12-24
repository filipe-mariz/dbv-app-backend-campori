import { Module } from '@nestjs/common';
import { databaseProviders, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubsModule } from './app/modules/clubs/clubs.module';
import { UnitModule } from './app/modules/unit/unit.module';
import { PathfindersModule } from './app/modules/pathfinders/pathfinders.module';

@Module({
  imports: [
    sequelizeModule,
    ClubsModule,
    UnitModule,
    PathfindersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
