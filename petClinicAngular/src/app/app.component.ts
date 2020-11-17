import { Component, OnInit } from '@angular/core';
import { Owner } from './models/owner.interface';
import { OwnerServiceService } from './services/owner-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( ){}

  ngOnInit(): void {
  }

}
