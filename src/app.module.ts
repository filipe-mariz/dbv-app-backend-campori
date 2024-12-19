import { Module } from '@nestjs/common';
import { databaseProviders, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubsModule } from './app/modules/clubs/clubs.module';

@Module({
  imports: [
    sequelizeModule,
    ClubsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
