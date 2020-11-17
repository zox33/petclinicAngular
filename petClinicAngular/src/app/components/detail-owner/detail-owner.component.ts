import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';

@Component({
  selector: 'app-detail-owner',
  templateUrl: './detail-owner.component.html',
  styleUrls: ['./detail-owner.component.scss']
})
export class DetailOwnerComponent implements OnInit {

  public ownerDetail:Owner;
  public id:string;
  constructor(private ownerService:OwnerServiceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.router.snapshot.paramMap.get('id');
    this.getOwner();
  }

  getOwner(){
    console.log(this.id);
    this.ownerService.getOwner(this.id).subscribe(ow=>{
        this.ownerDetail=ow;
    });
  }
  

}
