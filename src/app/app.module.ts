import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationBarComponent } from './views/navigation-bar/navigation-bar.component';
import { NewReceiverComponent } from './views/new-receiver/new-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NewReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
