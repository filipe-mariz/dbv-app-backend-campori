import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { club } from 'src/app/modules/clubs/entities/club.entity'
import { pathfinder } from 'src/app/modules/pathfinders/entities/pathfinder.entity';
import { unit } from 'src/app/modules/unit/entities/unit.entity';

const models = [club, unit, pathfinder]
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'postgres',
        logging: false
      });

      sequelize.addModels(models);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export const sequelizeModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  autoLoadModels: true,
  synchronize: true,
  logging: false,
  models,
});
