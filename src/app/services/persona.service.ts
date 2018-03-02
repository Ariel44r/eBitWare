import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {
  
  constructor() { }
  newObject(object: {}){
    let personaNueva = new Persona(object);
    this.datos(personaNueva);
  }

  setValues(object: {}){
    let personaNueva = new Persona(object);
    personaNueva.setNombre('Juanito');
    personaNueva.setEdad(25);
    personaNueva.setSexo('H');
    personaNueva.setPeso(60);
    personaNueva.setAltura(1.8);
    this.datos(personaNueva);
  }

  datos(persona: Persona){
    let imc = persona.calcularIMC();
    let esMayor = persona.esMayorDeEdad();
    if(imc < 0){
      console.log('IMC: ' + imc + ' está por de bajo de su peso');
    } else {
      if(imc == 0){
        console.log('IMC: ' + imc + ' está en su peso ideal');        
      } else {
        console.log('IMC: ' + imc + ' está por arriba de su peso');
      }
    }
    if(esMayor){
      console.log('Es mayor de edad');
    } else {
      console.log('Es menor de Edad');
    }
    console.log(persona.toString());
    console.log('\n\n');
  }

}
