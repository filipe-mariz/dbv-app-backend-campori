export abstract class UnitDatabase {
	abstract create<units>(createunitInput: units): Promise<units>;
	abstract findAll<units>(): Promise<units[]>;
}