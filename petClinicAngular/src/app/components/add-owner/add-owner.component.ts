import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner, OwnerDto } from 'src/app/models/owner.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';


@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit {

  owner:OwnerDto;
  //formulario
  form: FormGroup = new FormGroup ({ 
    firstName: new FormControl()
    ,lastName: new FormControl()
    ,address: new FormControl()
    ,city: new FormControl()
    ,telephone: new FormControl()
    });

  constructor(private ownerService: OwnerServiceService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      address: ["",Validators.required],
      city: ["",Validators.required],
      telephone: ["",Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.owner = new OwnerDto(this.form.get('firstName').value,this.form.get('lastName').value,this.form.get('address').value,this.form.get('city').value,this.form.get('telephone').value)
    this.ownerService.addOwner(this.owner).subscribe(add=>{
        this.router.navigate(['/owners']);
    });
  }

}
