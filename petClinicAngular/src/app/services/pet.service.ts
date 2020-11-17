import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/owner.interface';
import { PetDtoList } from '../models/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private Url:string="http://localhost:9004/pets/"
  constructor(private http:HttpClient) { }

  getPets(): Observable<PetDtoList[]>{
    return this.http.get<PetDtoList[]>(this.Url);
  }

  addPets(pet: Pet){
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
    return this.http.post<Pet>(this.Url,pet, {headers} );
  }
}
