import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerServiceService } from 'src/app/services/owner-service.service';


@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit {
  public owner;
  constructor(private route: ActivatedRoute, private ownerService:OwnerServiceService,private router:Router) { }
  public idL;

  ngOnInit(): void {
    this.idL = this.route.queryParams.subscribe(params =>{
      this.owner = {
        id:params['idE'],
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        telephone:""
      }
    });
    
  }
  onSubmit(form:NgForm){
    this.owner.id == form.value.id;
    this.owner.firstName == form.value.firstName;
    this.owner.lastName == form.value.lastName;
    this.owner.address == form.value.address;
    this.owner.city == form.value.city;
    this.owner.telephone == form.value.telephone;
    this.ownerService.editOwner(this.owner);
    this.router.navigate(["/owners"]);

  }

}
