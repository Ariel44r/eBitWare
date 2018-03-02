import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonaService } from './services/persona.service';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
