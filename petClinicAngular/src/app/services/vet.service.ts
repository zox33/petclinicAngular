import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addVet, Vet, VetDto } from '../models/vet.interface';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  private Url:string="http://localhost:9004/vets/"
  constructor(private http:HttpClient) {  }

  getVets(): Observable<Vet[]>{
    return this.http.get<Vet[]>(this.Url)
  }
  addVet(vet: VetDto){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<VetDto>(this.Url+"add",vet, {headers} );
  }
  deleteVet(vet:VetDto){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    let id: string  = vet.id.toString();
    return this.http.delete<VetDto>(this.Url+id);
  }
  editVet(vet: addVet){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.put<addVet>(this.Url+vet.id,vet, {headers} );
  }

}
