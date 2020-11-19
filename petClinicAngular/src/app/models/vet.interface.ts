export interface Specialty {
    id: number;
    name: string;
}

export interface Vet {
    id: number;
    firstName: string;
    lastName: string;
    specialties: Specialty[];
}
export class VetDto {
    id: number;
    firstName: string;
    lastName: string;
    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export class addVet {
    id: number;
    firstName: string;
    lastName: string;
    constructor(id:number,firstName:string,lastName:string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}