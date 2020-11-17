import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Owner } from '../../models/owner.interface';
import { OwnerServiceService } from '../../services/owner-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.scss']
})
export class FormOwnerComponent implements OnInit {

  public ownerAdd:Owner;

  constructor(private ownerService:OwnerServiceService,private router:Router) { }


  ngOnInit(): void {
    this.ownerAdd = {
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      id:null,
      pets: [],
      telephone: '',
     };
  }
  onSubmit(formOwner:NgForm){
    this.ownerAdd.firstName==formOwner.value.firstName;
    this.ownerAdd.lastName==formOwner.value.lastName;
    this.ownerAdd.address==formOwner.value.address;
    this.ownerAdd.city==formOwner.value.city;
    this.ownerAdd.telephone==formOwner.value.telephone;
    this.ownerAdd.pets==formOwner.value.pets;
    this.ownerService.addOwner(this.ownerAdd).subscribe(data=>{
      this.router.navigate(['/owners']);

    });
  }

}
