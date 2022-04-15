import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';
import { NavigationBarComponent } from './views/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReceiverComponent,
    NavigationBarComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ButtonModule,
    BrowserModule,
    DropdownModule,
    InputTextModule,
    ScrollingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
