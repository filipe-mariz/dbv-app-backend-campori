export abstract class PathfinderDatabase {
	abstract create<Pathfinders>(createPathfinderInput: Pathfinders): Promise<Pathfinders>;
	abstract findAll<Pathfinders>(): Promise<Pathfinders[]>;
}