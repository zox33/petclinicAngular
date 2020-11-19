import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { AppComponent } from './app.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { ListOwnerComponent } from './components/list-owner/list-owner.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { ListTypeComponent } from './list-type/list-type.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { EditOwnerComponent } from './components/edit-owner/edit-owner.component';
import { ListVetComponent } from './components/list-vet/list-vet.component';
import { AddVetComponent } from './components/add-vet/add-vet.component';
import { EditVetComponent } from './components/edit-vet/edit-vet.component';


const routes: Routes = [
  { path: '', component: ListPetComponent },
  { path: 'addPet', component: AddPetComponent },
  { path: 'typePet', component: ListTypeComponent },
  { path: 'addTypePet', component: AddTypeComponent },
  { path: 'editPet', component: EditPetComponent },
  { path: 'owners', component: ListOwnerComponent},
  { path: 'addOwner', component: AddOwnerComponent },
  { path: 'editOwner', component: EditOwnerComponent },
  { path: 'vets', component: ListVetComponent},
  { path: 'addVet', component: AddVetComponent},
  { path: 'editVet', component: EditVetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
