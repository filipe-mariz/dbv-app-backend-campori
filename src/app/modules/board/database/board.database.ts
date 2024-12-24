export abstract class BoardDatabase {
	abstract create<board>(createboardInput: board): Promise<board>;
	abstract findAll<board>(): Promise<board[]>;
}