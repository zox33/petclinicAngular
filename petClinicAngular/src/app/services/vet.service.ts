import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vet } from '../models/vet.interface';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  private Url:string="http://localhost:9966/petclinic"
  constructor(private http:HttpClient) {  }

  getVets(): Observable<Vet[]>{
    return this.http.get<Vet[]>(this.Url+"/api/vets/")
  }


}
