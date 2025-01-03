import { Injectable } from '@nestjs/common';
import { PathfinderDatabase } from './database/pathfinders.database';
import readXlsx from 'src/utils/readXlsx';

@Injectable()
export class PathfindersService {
  constructor(
    private readonly database: PathfinderDatabase
  ) {}

  public bulkCreate({ file, body }) {
    const metadata = readXlsx(file);
    const parseData = this.parseData({ metadata, body });

    return this.database.create(parseData);
  }

  private parseData({ metadata, body }) {
    return metadata.map(data => ({
      id: `${data['CÓDIGO DO USUARIO']}`,
      name: data['NOME DO USUARIO'],
      cpf: `${data['CPF']}` || '',
      bornDate: data['DATA DE NASCIMENTO'] || '',
      responsibleName: data['RESPONSÁVEL'] || '',
      responsiblePhone: `${data['TELELEFONE DO RESPONSÁVEL']}` || '',
      unit_id: body.unit_id,
      club_id: body.club_id
    }))
  }

  findAll() {
    return this.database.findAll()
  }
}
