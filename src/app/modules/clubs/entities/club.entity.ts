import { Table, Model, Column } from "sequelize-typescript";
import { defaulTableSettings, primaryKey } from "src/utils/global/GlobalSequelize";

@Table(defaulTableSettings)
export class club extends Model {
    @Column({ ...primaryKey })
    id: string;

    @Column
    name: string;

    @Column
    deleted_at: Date;
}
