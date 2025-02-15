import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaComponent } from './components/lista/lista.component';
import { BotonComponent } from './boton/boton.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { OwnerServiceService } from './services/owner-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnerComponent } from './components/list-owner/list-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { HomeComponent } from './components/home/home.component';
import { VetsComponent } from './components/list-vets/vets.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { VetService } from './services/vet.service';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { PetService } from './services/pet.service';
import { ListTypeComponent } from './list-type/list-type.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { EditOwnerComponent } from './components/edit-owner/edit-owner.component';
import { ListVetComponent } from './components/list-vet/list-vet.component';
import { AddVetComponent } from './components/add-vet/add-vet.component';
import { EditVetComponent } from './components/edit-vet/edit-vet.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    BotonComponent,
    SearchComponent,
    ListOwnerComponent,
    FormOwnerComponent,
    HomeComponent,
    VetsComponent,
    DetailOwnerComponent,
    ListPetComponent,
    EditPetComponent,
    AddPetComponent,
    ListTypeComponent,
    AddTypeComponent,
    AddOwnerComponent,
    EditOwnerComponent,
    ListVetComponent,
    AddVetComponent,
    EditVetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule

  ],
  providers: [OwnerServiceService, VetService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
