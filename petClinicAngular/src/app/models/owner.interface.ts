export interface Type {
    id: number;
    name: string;
}

export interface Pet {
    id: number;
    name: string;
    birthDate: string;
    type: Type;
    owner: number;
    visits: any[];
}
export class OwnerAdd{
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    pets: Pet[];
    constructor(id:number,firstName:string, lastName:string, address:string, city:string, telephone:string) {
        this.id = id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city = city;
        this.telephone=telephone;
     }
}
export class Owner {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    pets: Pet[];
    constructor(firstName:string, lastName:string, address:string, city:string, telephone:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.telephone=telephone;
     }
     
}
export class OwnerDto {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    constructor(firstName:string, lastName:string, address:string, city:string, telephone:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city = city;
        this.telephone=telephone;
     }
     
}

export interface OwnerList {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
}