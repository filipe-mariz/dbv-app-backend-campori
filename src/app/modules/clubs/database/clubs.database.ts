import { QueryData } from "src/utils/global/globalInterface";
import { UpdateClubDto } from "../dto/update-club.dto";

export abstract class ClubDatabase {
	abstract create<users>(createUserInput: users): Promise<users>;
	abstract findAll<users>(): Promise<users[]>;
	abstract findOne<users>(filter: QueryData): Promise<users>;
	abstract update<users>(updateUserInput: UpdateClubDto, filter: QueryData): Promise<users>;
	abstract remove<users>(filter: QueryData): Promise<users>;
}