import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {
  public allOwners:Owner[];
  public mostrar:boolean;
  constructor( private ownerService:OwnerServiceService, private router:Router){}

  ngOnInit(): void {
    this.mostrar=true
    this.getAllOwners();

  }

  getAllOwners(){
    this.ownerService.getOwners().subscribe(owners=>{
      this.allOwners=owners;
    })
  }

  ocultar(){
    this.mostrar=false;
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
  
  mostrarList(){
    this.mostrar=true;
  }

  onSelect(owner: Owner){
    this.router.navigate(['/owners',owner.id]);
  }


}
