import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class AppComponent implements OnInit {
  productos: any[] = [];
  cargando: boolean = true;

  constructor(private consulta: ConsultaService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.cargando = true; // Mostrar indicador de carga
    this.consulta.getProductos()
      .pipe(
        catchError(error => {
          console.error('Error al obtener productos:', error);
          return [];
        })
      )
      .subscribe((resp: Object) => {
        console.log(resp);
        this.productos = resp as any[];
        this.cargando = false; // Ocultar indicador de carga
      });
  }
}

