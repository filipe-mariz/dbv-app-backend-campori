import { Injectable } from '@nestjs/common';
import { BoardDatabase } from './database/board.database';
import readXlsx from 'src/utils/readXlsx';

@Injectable()
export class BoardService {
  constructor(
    private readonly database: BoardDatabase
  ) {}

  create({ file, body }) {
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
      position: data['DESCRIÇÃO DO CARGO'] || '',
      unit_id: body.unit_id,
      club_id: body.club_id
    }))
  }

  findAll() {
    return `This action returns all board`;
  }
}