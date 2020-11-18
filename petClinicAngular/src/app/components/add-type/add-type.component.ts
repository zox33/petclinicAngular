import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypePet } from 'src/app/models/type-pets.interface';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  type:TypePet;
  //formulario
  form: FormGroup = new FormGroup ({ 
    nombre: new FormControl()
    ,birthDate: new FormControl()
    ,typeId: new FormControl()
    ,ownerId: new FormControl()});

  constructor(private petService:PetService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["",Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.type = new TypePet(this.form.get('name').value)
    this.petService.addTypePet(this.type).subscribe(add=>{
        this.router.navigate(['/typePet']);
    });
  }

}
