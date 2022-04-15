import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';

const routes: Routes = [
  { 
    path:'new-receiver',
    component: NewReceiverComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
