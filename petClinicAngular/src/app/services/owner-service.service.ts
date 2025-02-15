import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner, OwnerDto } from '../models/owner.interface'

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  private Url:string="http://localhost:9004/owner/"
  constructor(private http:HttpClient) {  }

  getOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>(this.Url)
  }

  
  addOwner(owner:OwnerDto): Observable<Owner>{
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<Owner>(this.Url+"add",owner, {headers} );
  }

  getOwner(id:string): Observable<Owner>{
    return this.http.get<Owner>(this.Url+"/api/owners/"+id)
  }
  deleteOwner(owner:Owner){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    let id: string  = owner.id.toString();
    return this.http.delete<Owner>(this.Url+id);
  }
  editOwner(owner:Owner){
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.put<Owner>(this.Url+owner.id,owner, {headers} );
  }


}
