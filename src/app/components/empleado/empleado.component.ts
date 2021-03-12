import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/common/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
   
  empleado: Empleado[];
  renderCreateEmpleado: boolean;
  renderCreateSolicitud: boolean;
  createEmpleado: any = {
   
}
  

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
   this.listEmpleado();
   this.renderCreateEmpleado = false;
  }

  listEmpleado(){
     this.empleadoService.getEmpleadoList().subscribe(
       resp => {
         this.empleado = resp;
         console.log("res----",resp);
       }
     )
  }

  crearEmpleado(){
   
    this.empleadoService.createEmpleado(this.createEmpleado).subscribe(
      resp => {
            this.listEmpleado();
            alert("empleado creado correctamente"); 
            this.createEmpleado = {

            } ;   
      }
    ) 
  }

}
