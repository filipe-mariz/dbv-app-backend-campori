import { Table, Column, ForeignKey, BelongsTo, Model } from "sequelize-typescript";
import { defaulTableSettings, primaryKey } from "src/utils/global/GlobalSequelize";
import { unit } from "../../unit/entities/unit.entity";
import { club } from "../../clubs/entities/club.entity";

@Table(defaulTableSettings)
export class pathfinder extends Model {
    @Column({ ...primaryKey })
    id: string;

    @Column
    name: string;

    @Column({ unique: true })
    cpf: string;

    @Column
    bornDate: string;

    @Column
    responsibleName: string;

    @Column
    responsiblePhone: string;

    @ForeignKey(() => unit)
    @Column({ allowNull: false })
    unit_id: string;

    @BelongsTo(() => unit)
    unit: unit;

    @ForeignKey(() => club)
    @Column({ allowNull: false })
    club_id: string;

    @BelongsTo(() => club)
    club: club;
}
