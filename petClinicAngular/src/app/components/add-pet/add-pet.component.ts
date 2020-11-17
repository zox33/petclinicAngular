import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  public pet;
  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.pet = {
      id:"",
      name:"",
      birthDate:"",
      typeId:"",
      ownerId:""
    }
  }
  onSubmit(formPet:NgForm){
    this.pet.name == formPet.value.name;
    this.pet.birthDate == formPet.value.birthDate;
    this.pet.typeId == formPet.value.typeId;
    this.pet.ownerId == formPet.value.ownerId;
    this.petService.addPets(this.pet);

  }

}
