import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vet, VetDto } from 'src/app/models/vet.interface';
import { VetService } from 'src/app/services/vet.service';

@Component({
  selector: 'app-list-vet',
  templateUrl: './list-vet.component.html',
  styleUrls: ['./list-vet.component.scss']
})
export class ListVetComponent implements OnInit {

  public Vets : Vet[];
  constructor(private vetService:VetService, private router:Router){}

  ngOnInit(): void {
    this.vetService.getVets().subscribe(vet=>{
      this.Vets = vet;
    });
  }

  

   borrar(vet:VetDto){
      this.vetService.deleteVet(vet).subscribe(p=>{
        window.location.reload();
      }
      );
   }
   editar(vet:VetDto){
      this.router.navigate(["/editVet"],{queryParams: {idE:vet.id}});
 }
    aniadir(){
      this.router.navigate(["/addVet"]);
    }

}
