import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  public pet;
  constructor(private route: ActivatedRoute, private petService:PetService) { }
  public idL;

  ngOnInit(): void {
    this.idL = this.route.queryParams.subscribe(params =>{
      this.pet = {
        id:params['idE'],
        name:"",
        birthDate:"",
        typeId:"",
        ownerId:""
      }
    });
    
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
