import { Component, OnInit } from '@angular/core';
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
  constructor(private petService:PetService) { }


  ngOnInit(): void {
    this.petService.getPets().subscribe(pet=>{
      this.Pets = pet;
    });
  }

   borrar(pet:Pet){
      this.petService.deletePets(pet);
   }

}
