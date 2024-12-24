import { Injectable } from '@nestjs/common';
import { PathfinderDatabase } from './database/pathfinders.database';
import * as xlsx from 'xlsx';

@Injectable()
export class PathfindersService {
  constructor(
    private readonly database: PathfinderDatabase
  ) {}

  async bulkCreate({ file, body }) {
    const metadata = this.readXlsx(file)
    const parseData = this.parseData({ metadata, body });

    return this.database.bulkCreate(parseData)
  }

  private readXlsx(file: any) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    return xlsx.utils.sheet_to_json(worksheet);
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
