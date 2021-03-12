import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Empleado } from '../common/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:9090/api/v001/empleado';
   headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient: HttpClient) { }


  getEmpleadoList(): Observable<Empleado[]>{
    return  this.httpClient.get<Empleado[]>(this.baseUrl + "/all").pipe(
       map(response => response)

    );

  }

   createEmpleado(obj: any): Observable<Empleado>{
    return this.httpClient.post<Empleado>(this.baseUrl, obj,{headers:this.headers}).pipe(
      map(response => response)

   );
  }
 


}
