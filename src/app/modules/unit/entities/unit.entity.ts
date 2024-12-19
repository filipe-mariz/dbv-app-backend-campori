import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { defaulTableSettings, primaryKey } from "src/utils/global/GlobalSequelize";
import { club } from "../../clubs/entities/club.entity";
import { pathfinder } from "../../pathfinders/entities/pathfinder.entity";

@Table(defaulTableSettings)
export class unit extends Model {
    @Column({ ...primaryKey })
    id: string;

    @Column
    name: string;

    @HasMany(() => pathfinder)
    pathfinder: pathfinder[];

    @ForeignKey(() => club)
    @Column({ allowNull: false })
    club_id: string;

    @BelongsTo(() => club)
    club: club;
}
