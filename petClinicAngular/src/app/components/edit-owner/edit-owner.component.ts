import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner, OwnerAdd } from 'src/app/models/owner.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';


@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit {
  owner:OwnerAdd;
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

  constructor(private ownerService: OwnerServiceService, private formBuilder: FormBuilder, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idL = this.route.queryParams.subscribe(params =>{
      this.idV = params['idE']
    });
    this.form = this.formBuilder.group({
      id:[this.idV,Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      address: ["",Validators.required],
      city: ["",Validators.required],
      telephone: ["",Validators.required],
    });
  }

  onSubmit(formulario:FormGroup):void{
    this.owner = new OwnerAdd(this.form.get('id').value,this.form.get('firstName').value,this.form.get('lastName').value,this.form.get('address').value,this.form.get('city').value,this.form.get('telephone').value)
    this.ownerService.editOwner(this.owner).subscribe(add=>{
        this.router.navigate(['/owners']);
    });
  }

}
