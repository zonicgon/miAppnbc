import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage {
  asignaturas = [
    { nombre: 'Estadistica', seccion: 'A' },
    { nombre: 'Etica', seccion: 'B' },
    { nombre: 'Programacion', seccion: 'C' },
    { nombre: 'Consulta de datos', seccion: 'D' },
    { nombre: 'Ingles', seccion: 'E' },
    { nombre: 'Arquitectura', seccion: 'F' },
    { nombre: 'Portafolio', seccion: 'G' },
    
  ];

  constructor() {}
}
