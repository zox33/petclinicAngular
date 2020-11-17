import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  texto:string;
  resultado:string;
  @Input() labelButton:string;
  @Output() buscadorEvent = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
    this.texto=' ';
    this.labelButton = this.labelButton || 'Buscador';

  }

  buscar(){
    this.resultado = "Usted buscó: "+ this.texto;
    this.buscadorEvent.emit({resultado:this.resultado});
  }

}
