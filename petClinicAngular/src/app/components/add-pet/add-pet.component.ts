import { Component, OnInit } from '@angular/core';
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
      name: ["",Validators.required],
      birthDate: [Date(), Validators.required],
      typeId: [2, Validators.required],
      ownerId: [1,Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.pet = new NewPetDto(this.form.get('name').value, this.form.get('birthDate').value, this.form.get('typeId').value,this.form.get('ownerId').value)
    this.petService.addPet(this.pet).subscribe(add=>{
        this.router.navigate(['/']);
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
