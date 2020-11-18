import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/owner.interface';
import { NewPetDto, PetDtoList } from '../models/pet.interface';
import { TypePet } from '../models/type-pets.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private Url:string="http://localhost:9004/pets/"
  private UrlTypes:string="http://localhost:9004/types/"

  constructor(private http:HttpClient) { }

  getPets(): Observable<PetDtoList[]>{
    return this.http.get<PetDtoList[]>(this.Url);
  }

  getTypesPets(): Observable<TypePet[]>{
    return this.http.get<TypePet[]>(this.UrlTypes);
  }

  addPets(pet: NewPetDto){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<Pet>(this.Url,pet, {headers} );
  }
  addTypePet(type:TypePet){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<TypePet>(this.UrlTypes,type, {headers} );
  }
  editPets(){
    /*const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<Pet>(this.Url+"/api/owners",pet, {headers} );*/
  }
  deletePets(pet:Pet){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    let id: string  = pet.id.toString();
    return this.http.delete<Pet>(this.Url+id);
  }
  deleteTypePets(type:TypePet){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    let id: string  = type.id.toString();
    return this.http.delete<TypePet>(this.UrlTypes+id);
  }
}
