import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerList } from 'src/app/models/owner.interface';
import { PetDtoList } from 'src/app/models/pet.interface';
import { TypePet } from 'src/app/models/type-pets.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  pet:PetDtoList;
  typePets:TypePet[]=[];
  ownerList:OwnerList[]=[];
  public idL;
  public idV;
  //formulario
  form: FormGroup = new FormGroup ({ 
    nombre: new FormControl()
    ,birthDate: new FormControl()
    ,typeId: new FormControl()
    ,ownerId: new FormControl()});

  constructor(private petService:PetService, private formBuilder: FormBuilder, private router:Router, private ownerService:OwnerServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTypes();
    this.getOwners();
    this.idL = this.route.queryParams.subscribe(params =>{
      this.idV = params['idE']
    });
    this.form = this.formBuilder.group({
      id:[this.idV,Validators.required],
      name: ["",Validators.required],
      birthDate: [Date(), Validators.required],
      typeId: [2, Validators.required],
      ownerId: [1,Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.pet = new PetDtoList(this.form.get('id').value,this.form.get('name').value, this.form.get('birthDate').value, this.form.get('typeId').value,this.form.get('ownerId').value)
    this.petService.editPets(this.pet).subscribe(add=>{
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
