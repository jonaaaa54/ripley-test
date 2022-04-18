import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppComponent } from './app.component';
import { ApiFactory } from './config/api-config';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/table/table.component';
import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';
import { NavigationBarComponent } from './views/navigation-bar/navigation-bar.component';
import { NewTransferenceComponent } from './views/new-transference/new-transference.component';
import { TransferHistoryComponent } from './views/transfer-history/transfer-history.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NewReceiverComponent,
    NavigationBarComponent,
    NewTransferenceComponent,
    TransferHistoryComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    TableModule,
    ButtonModule,
    BrowserModule,
    DropdownModule,
    InputTextModule,
    ScrollingModule,
    HttpClientModule,
    AppRoutingModule,
    InputNumberModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    },
    ApiFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
