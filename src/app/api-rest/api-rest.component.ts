import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../services/api-rest.service';
import { Getresponse } from '../models/getresponse';
import { Postputresponse } from '../models/postputresponse';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css'],
  providers:[ ApiRestService ]
})
export class ApiRestComponent implements OnInit {

  getResponse: [Getresponse];
  postPutResponse: Postputresponse;
  bool = false;
  constructor(private apiRestService: ApiRestService) { }

  ngOnInit() {
  }

  getRequest(){
    this.bool = true;
    this.apiRestService.getRequestService()
      .subscribe(data => {
        this.getResponse = data;
        console.log(this.getResponse);
      })
  }

  postRequest(){
    this.apiRestService.postRequestService()
      .subscribe(data =>{
        this.postPutResponse = data;
        console.log(this.postPutResponse);
        alert('Cve_Mensaje: ' + this.postPutResponse[0].Cve_Mensaje);
      })
  }

  putRequest(){
    this.apiRestService.putRequestService()
      .subscribe(data =>{
        this.postPutResponse = data;
        console.log(this.postPutResponse);
        alert('Cve_Mensaje: ' + this.postPutResponse[0].Cve_Mensaje);
      })
  }
}
