import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet.service';
import { Vet } from '../../models/vet.interface';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {

  public allVets:Vet[];
  public mostrar:boolean;
  constructor(private vetService:VetService) { }

  ngOnInit(): void {
    this.mostrar=true;
    this.getAllVets();
  }


  toggle() {
    this.mostrar = !this.mostrar;
  }

  getAllVets(){
    this.vetService.getVets().subscribe(vets=>{
      this.allVets=vets;
    })
  }


}
