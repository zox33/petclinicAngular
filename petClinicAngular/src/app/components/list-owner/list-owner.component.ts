import { Component, OnInit } from '@angular/core';
import { Owner, OwnerList } from 'src/app/models/owner.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {
  public Owners : OwnerList[];
  constructor(private ownerService:OwnerServiceService, private router:Router){}

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(owner=>{
      this.Owners = owner;
    });
  }

  

   borrar(owner:Owner){
     this.ownerService.deleteOwner(owner).subscribe(p=>{
        window.location.reload();
      }
      );
   }
   editar(owner:Owner){
    this.router.navigate(["/editOwner"],{queryParams: {idE:owner.id}});
    }
    aniadir(){
      this.router.navigate(["/addOwner"]);
      }

}
