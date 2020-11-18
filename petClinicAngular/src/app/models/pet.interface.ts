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

/*export interface NewPetDtoInter {
    name: string;
    birthDate: string;
    type: number;
    owner: number;
}*/

export class NewPetDto {
    name: string;
    birthDate: string;
    type: number;
    owner: number;
    constructor(name:string, birthDate:string, type:number, owner:number) {
       this.name=name;
       this.birthDate=birthDate;
       this.type=type;
       this.owner=owner;
    }
}


