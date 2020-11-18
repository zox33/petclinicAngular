import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewPetDto } from 'src/app/models/pet.interface';
import { TypePet } from 'src/app/models/type-pets.interface';
import { PetService } from 'src/app/services/pet.service';


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
    this.petService.deletePetType(type).subscribe(p=>{
        window.location.reload();
      }
      );
   }

}
