import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { addVet } from 'src/app/models/vet.interface';
import { VetService } from 'src/app/services/vet.service';

@Component({
  selector: 'app-edit-vet',
  templateUrl: './edit-vet.component.html',
  styleUrls: ['./edit-vet.component.scss']
})
export class EditVetComponent implements OnInit {

  vet:addVet;
  public idL;
  public idV;
  //formulario
  form: FormGroup = new FormGroup ({
    id:new FormControl(),
    firstName: new FormControl()
    ,lastName: new FormControl()
    ,address: new FormControl()
    ,city: new FormControl()
    ,telephone: new FormControl()
    });

  constructor(private vetService: VetService, private formBuilder: FormBuilder, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idL = this.route.queryParams.subscribe(params =>{
      this.idV = params['idE']
    });
    this.form = this.formBuilder.group({
      id:[this.idV,Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required]
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.vet = new addVet(this.form.get('id').value,this.form.get('firstName').value,this.form.get('lastName').value)
    this.vetService.editVet(this.vet).subscribe(add=>{
        this.router.navigate(['/vets']);
    });
  }

}
