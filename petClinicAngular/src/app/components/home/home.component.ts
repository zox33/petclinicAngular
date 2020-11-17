import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title:boolean;
  public numFont:number;
  public description:string;
  public data:{nombre:string,edad:number}[];
  public mensajeBuscado:string;
  public Buscar:string;
  public spacing:number;

  constructor() { }

  ngOnInit(): void {
    this.Buscar = "Buscar"
    this.title=true;
    this.numFont=35;
    this.spacing=100;
    this.description="description"
    this.data=[
      {nombre:'Manuel',edad:23},
      {nombre:'José',edad:23},
      {nombre:'Maria',edad:43},
      {nombre:'Vanessa',edad:19},
    ];
  }


cambiarModelo(texto:string){
  this.description = texto;
}


getSearch(event: { resultado: string; }){
  this.mensajeBuscado = event.resultado;
}


}
