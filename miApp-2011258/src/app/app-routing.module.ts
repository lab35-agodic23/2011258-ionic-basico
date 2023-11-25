import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

import { CamaraComponent } from './camera/camera.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'produtos',
    component: ProductosComponent,
  },
  {
    path: 'alumnos',
    component: ListaAlumnosComponent,
  },
  {
    path: 'camara',
    component : CamaraComponent
  },
  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
