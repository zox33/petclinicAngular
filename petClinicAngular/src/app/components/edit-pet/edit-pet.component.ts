import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  @Input() idM:number;
  public pet;
  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.pet = {
      id:this.idM,
      name:"",
      birthDate:"",
      typeId:"",
      ownerId:""
    }
  }
  onSubmit(formPet:NgForm){
    this.pet.id == formPet.value.id;
    this.pet.name == formPet.value.name;
    this.pet.birthDate == formPet.value.birthDate;
    this.pet.typeId == formPet.value.typeId;
    this.pet.ownerId == formPet.value.ownerId;
    this.petService.editPets(this.pet);

  }

}
