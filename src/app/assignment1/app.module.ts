import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { InnerAlertComponent } from './inner-alert/inner-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    InnerAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
