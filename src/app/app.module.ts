import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EmpleadoComponent,
    SolicitudComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
