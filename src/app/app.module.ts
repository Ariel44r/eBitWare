import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ApiRestComponent } from './api-rest/api-rest.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ApiRestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
