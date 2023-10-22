import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {

  constructor( private ruta: ActivatedRoute, private consulta: ConsultaService) {
    
  } 

  ngOnInit() {
    this.consultaProducto(this.idProducto)
  }

  idProducto: string =this.ruta.snapshot.params ['id'];

  producto: any = {};

  consultaProducto( id: string) {
    this.consulta.getProductoDetalle(id)
    .subscribe((resp: object) =>{console.log (resp);
      this.producto = resp as any;
    });
  }

}
