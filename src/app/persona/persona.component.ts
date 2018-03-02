import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  constructor(private personaService: PersonaService) { }
  
  ngOnInit() { }

  instanciar(nombre: string, edad: number,  sexo: string, peso: number, altura: number){
    this.personaService.newObject({nombre: nombre, edad: edad, sexo: sexo, peso: peso, altura:altura});
    this.personaService.newObject({nombre: nombre, edad: edad, sexo: sexo});
    this.personaService.setValues({});    
  }

}
