import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner.interface'

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  private Url:string="http://localhost:9004/owner/"
  constructor(private http:HttpClient) {  }

  getOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>(this.Url)
  }

  
  addOwner(owner:Owner): Observable<Owner>{
    const headers = new HttpHeaders( );
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return this.http.post<Owner>(this.Url+"/api/owners",owner, {headers} );
  }

  getOwner(id:string): Observable<Owner>{
    return this.http.get<Owner>(this.Url+"/api/owners/"+id)
  }


}
