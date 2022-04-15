import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';
import { NewTransferenceComponent } from './views/new-transference/new-transference.component';

const routes: Routes = [
  { 
    path:'new-receiver',
    component: NewReceiverComponent 
  },
  {
    path: 'new-bank-transference',
    component: NewTransferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
