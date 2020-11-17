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
    this.pet.id == formPet.value.id;
    this.pet.name == formPet.value.name;
    this.pet.birthDate == formPet.value.birthDate;
    this.pet.typeId == formPet.value.typeId;
    this.pet.ownerId == formPet.value.ownerId;
    this.petService.addPets(this.pet);

  }

}


/*import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewPetDto } from 'src/app/models/pet.interface';
import { Router } from '@angular/router';
import { TypePet } from 'src/app/models/type-pets.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
import { OwnerList } from 'src/app/models/owner.interface';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  pet:NewPetDto;
  typePets:TypePet[]=[];
  ownerList:OwnerList[]=[];
  //formulario
  form: FormGroup = new FormGroup ({ 
    nombre: new FormControl()
    ,birthDate: new FormControl()
    ,typeId: new FormControl()
    ,ownerId: new FormControl()});

  constructor(private petService:PetService, private formBuilder: FormBuilder, private router:Router, private ownerService:OwnerServiceService) { }

  ngOnInit(): void {
    this.getTypes();
    this.getOwners();
    this.form = this.formBuilder.group({
      nombre: ["",Validators.required],
      birthDate: Date(),
      typeId: Number(),
      ownerId: Number(),
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.pet.name == formulario.get('nombre').value;
    this.pet.birthDate == formulario.get('birthDate').value;
    this.pet.type == formulario.get('typeId').value;
    this.pet.owner == formulario.get('ownerId').value;

    this.petService.addPets(this.pet).subscribe(add=>{
        "añadido"
        this.router.navigate(['/pets']);

    });
  }

  getTypes(){
    this.petService.getTypesPets().subscribe(typ=>{
      this.typePets=typ;
    });
  }

  getOwners(){
    this.ownerService.getOwners().subscribe(ow=>{
      this.ownerList=ow;
    });
  }

}
*/