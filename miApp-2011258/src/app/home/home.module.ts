import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from '../productos/productos.component';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { CamaraComponent } from '../camera/camera.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListaAlumnosComponent, ProductosComponent, ProductoDetalleComponent, CamaraComponent]
})
export class HomePageModule {}
