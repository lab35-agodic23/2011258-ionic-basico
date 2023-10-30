import { Component } from '@angular/core';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent  {
  nuevoAlumno: Alumno;
  alumnos: Alumno[] = [];

  constructor() {
    this.nuevoAlumno = { nombre: '', presente: false };
  }

  agregarAlumno() {
    if (this.nuevoAlumno.nombre) {
      this.alumnos.push(this.nuevoAlumno);
      this.nuevoAlumno = { nombre: '', presente: false };
    }
  }

  ngOnInit() {}

  alumno : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
}
