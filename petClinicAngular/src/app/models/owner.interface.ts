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

export interface Owner {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
    pets: Pet[];
}