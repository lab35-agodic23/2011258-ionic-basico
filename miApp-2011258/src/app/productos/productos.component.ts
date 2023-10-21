import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  cargando: boolean = true;
  constructor(private consulta: ConsultaService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.consulta.getProductos()
      .subscribe(
        (resp: Object) => {
          console.log(resp);
          this.productos = resp as any[];
        }
      );
  }
}

