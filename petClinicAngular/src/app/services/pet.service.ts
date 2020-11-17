import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/owner.interface';
import { NewPetDto, PetDtoList } from '../models/pet.interface';
import { TypePet } from '../models/type-pets.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private Url:string="http://localhost:9005/pets/"
  private UrlTypes:string="http://localhost:9005/types/"

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
}
