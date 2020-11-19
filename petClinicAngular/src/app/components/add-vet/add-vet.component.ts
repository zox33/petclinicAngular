import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VetDto } from 'src/app/models/vet.interface';
import { VetService } from 'src/app/services/vet.service';

@Component({
  selector: 'app-add-vet',
  templateUrl: './add-vet.component.html',
  styleUrls: ['./add-vet.component.scss']
})
export class AddVetComponent implements OnInit {
  vet:VetDto;
  //formulario
  form: FormGroup = new FormGroup ({ 
    firstName: new FormControl()
    ,lastName: new FormControl()});

  constructor(private vetService:VetService, private formBuilder: FormBuilder, private router:Router,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["", Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.vet = new VetDto(this.form.get('firstName').value, this.form.get('lastName').value)
    this.vetService.addVet(this.vet).subscribe(add=>{
        this.router.navigate(['/vets']);
    });
  }

}
