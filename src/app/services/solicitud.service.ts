import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../common/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private baseUrl = 'http://localhost:9090//api/v001/solicitud';

  constructor(private httpClient: HttpClient) { }



  getSolisitudList(): Observable<Solicitud[]>{
    return  this.httpClient.get<Solicitud[]>(this.baseUrl + "/all").pipe(
       map(response => response)

    );

  }
}
