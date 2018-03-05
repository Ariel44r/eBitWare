import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Getresponse } from '../models/getresponse';
import { Postputresponse } from '../models/postputresponse'

const httpOptions = {
  headers: new HttpHeaders({ 
    
    'Content-Type': 'text/plain'
  })
};

const httpOptionsPut = {
  headers: new HttpHeaders({ 
      'Content-Type': 'aplication/json',
      'Content-Encoding': [
        'compress',
        'gzip',
        'deflate',
        'identity',
        'br'
      ]
  })
};

@Injectable()
export class ApiRestService {

  constructor(private http:HttpClient) { }

  url = 'http://187.188.122.85:8091/NutriNET/Cliente';

  getRequestService(): Observable<[Getresponse]>{
    return this.http.get<[Getresponse]>(this.url);
  }

  postRequestService(): Observable<Postputresponse>{
    var object = {
      "Nombre": "Juan",
      "Apellidos": "Perez Hernandez",
      "Nombre_Usuario": "Ju",
      "Correo_Electronico": "jperez@hotmail.com",
      "Contraseña": "juanitoperez"
    }
    return this.http.post<Postputresponse>(this.url, object, httpOptions);
  }

  putRequestService(): Observable<Postputresponse>{
    var object = {
      "Edad": 39,
      "Estatura": 1.80,
      "Peso": 60,
      "GEB": 1500
    }
    return this.http.put<Postputresponse>(this.url + '/59', object, httpOptionsPut);
  }
}
