import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
    console.log("From Module")
  }
}
