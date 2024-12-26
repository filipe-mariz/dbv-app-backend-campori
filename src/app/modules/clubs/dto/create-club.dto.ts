export class CreateClubDto {
    id: string;
    name: string;
    boardVacancies: number;
}

export class IPathfinder {
    id: string;
    name: string;
    cpf: string;
    bornDate: string;
    responsibleName: string;
    responsibleEmail: string;
    responsiblePhone: string;
    userAdress: string;
    city: string;
    motherName: string;
    fatherName: string;
    unit_id: string;
    club_id: string;
}

export class IUnit {
    id: string;
    name: string;
    club_id: string;
}

export class IEnrollment {
    unit: IUnit;
    pathfinders: Array<IPathfinder>;
}