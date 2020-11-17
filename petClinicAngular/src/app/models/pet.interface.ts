export interface Pet {
    id: number;
    name: string;
    birthDate: Date;
    typeId: number;
    ownerId: number
}

export interface PetDtoList {
    id: number;
    name: string;
    birthDate: string;
    type: string;
    owner: string;
}

export interface NewPetDto {
    name: string;
    birthDate: string;
    type: number;
    owner: number;
}
