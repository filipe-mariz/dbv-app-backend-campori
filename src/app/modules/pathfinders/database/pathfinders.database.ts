import { IPantfinders } from "../dto/create-pathfinder.dto";

export abstract class PathfinderDatabase {
	abstract create<Pathfinders>(createPathfinderInput: Pathfinders): Promise<Pathfinders>;
	abstract findAll<Pathfinders>(): Promise<Pathfinders[]>;
	abstract bulkCreate(data: Array<IPantfinders>): any;
}