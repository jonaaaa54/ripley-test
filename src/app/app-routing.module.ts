import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';
import { NewTransferenceComponent } from './views/new-transference/new-transference.component';
import { TransferHistoryComponent } from './views/transfer-history/transfer-history.component';
import { TransferHistoryContentResolver } from './resolvers/transfer-history-content.resolver';

const routes: Routes = [
  { 
    path:'new-receiver',
    component: NewReceiverComponent 
  },
  {
    path: 'new-bank-transference',
    component: NewTransferenceComponent
  },
  {
    path: 'transfer-history',
    component: TransferHistoryComponent,
    resolve: {
      transferHistory: TransferHistoryContentResolver
    }
  },
  {
    path: '', 
    component: NewReceiverComponent
  },
  {
    path: '**', 
    redirectTo: '/new-receiver'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
