import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerList } from 'src/app/models/owner.interface';
import { TypePet } from 'src/app/models/type-pets.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  public pet;
  constructor(private route: ActivatedRoute, private petService:PetService,private ownerService:OwnerServiceService,private router:Router) { }
  public idL;
  typePets:TypePet[]=[];
  ownerList:OwnerList[]=[];

  ngOnInit(): void {
    this.getTypes();
    this.getOwners();
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
    this.router.navigate(["/"]);

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
