import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/owner.interface';
import { PetDtoList } from 'src/app/models/pet.interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {
  public Pets : PetDtoList[];
  constructor(private petService:PetService, private router:Router){}

  ngOnInit(): void {
    this.petService.getPets().subscribe(pet=>{
      this.Pets = pet;
    });
  }

  

   borrar(pet:Pet){
      this.petService.deletePets(pet).subscribe(p=>{
        window.location.reload();
      }
      );
   }
   editar(pet:Pet){
      this.router.navigate(["/editPet"],{queryParams: {idE:pet.id}});
 }
    aniadir(){
      this.router.navigate(["/addPet"]);
    }

}
