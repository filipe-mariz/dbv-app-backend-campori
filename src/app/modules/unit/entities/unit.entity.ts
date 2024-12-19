import { Table, Model, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { defaulTableSettings, primaryKey } from "src/utils/global/GlobalSequelize";
import { club } from "../../clubs/entities/club.entity";

@Table(defaulTableSettings)
export class unit extends Model {
    @Column({ ...primaryKey })
    id: string;

    @Column
    name: string;

    @ForeignKey(() => club)
    @Column({ allowNull: false })
    club_id: string;

    @BelongsTo(() => club)
    club: club;
}
