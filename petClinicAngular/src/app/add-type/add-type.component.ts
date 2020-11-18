import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  public type;
  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.type = {
      id:"",
      name:"",
    }
  }
  onSubmit(formPet:NgForm){
    this.type.name == formPet.value.name;
    this.petService.addTypePet(this.type);

  }


}
