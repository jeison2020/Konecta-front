import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/common/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: Solicitud[];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.listSolicitud();
  }


  listSolicitud(){
    this.solicitudService.getSolisitudList().subscribe(
      resp => {
        this.solicitud = resp;
        console.log("res----",resp);
      }
    )
 }

 crearSolicitud(){
   
 }

}
