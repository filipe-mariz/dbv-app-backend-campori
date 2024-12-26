export abstract class UnitDatabase {
	abstract create<units>(createunitInput: units): Promise<units>;
	abstract findAll<units>(): Promise<units[]>;
	abstract findByWhere<units>(where: any, attributes: Array<string>):Promise<units[]>;
}