export abstract class ClubDatabase {
	abstract create<clubs>(createClubInput: clubs): Promise<clubs>;
	abstract findAll<clubs>(): Promise<clubs[]>;
	abstract findOneClubWithUnits(id: string): any;
}