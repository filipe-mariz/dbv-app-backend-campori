import { Table, Model, Column, HasMany } from "sequelize-typescript";
import { defaulTableSettings, primaryKey } from "src/utils/interfaces/GlobalSequelize";
import { unit } from "../../unit/entities/unit.entity";
import { pathfinder } from "../../pathfinders/entities/pathfinder.entity";
import { board } from "../../board/entities/board.entity";

@Table(defaulTableSettings)
export class club extends Model {
    @Column({ ...primaryKey })
    id: string;

    @Column
    name: string;

    @Column
    paymentFilePath: string;

    @Column
    boardVacancies: number;

    @HasMany(() => unit)
    units: unit[];

    @HasMany(() => pathfinder)
    pathfinder: pathfinder[];

    @HasMany(() => board)
    board: board[];
}
