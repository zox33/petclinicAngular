import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../models/owner.interface';
import { TypePet } from '../models/type-pets.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent implements OnInit {

  public Types : TypePet[];
  constructor(private petService:PetService, private router:Router){}

  ngOnInit(): void {
    this.petService.getTypesPets().subscribe(type=>{
      this.Types = type;
    });
  }

  

   borrar(type:TypePet){
      this.petService.deleteTypePets(type).subscribe(p=>{
        window.location.reload();
      }
      );
   }
}
