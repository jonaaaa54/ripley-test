import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
