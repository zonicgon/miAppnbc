import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage {
  asistencias = [
    { asignatura: 'Estadistica', fecha: '2024-09-20', estado: 'Asistió' },
    { asignatura: 'Etica', fecha: '2024-09-21', estado: 'No asistió' },
    { asignatura: 'Programacion', fecha: '2024-09-22', estado: 'Asistió' },
    { asignatura: 'Consulta de datos', fecha: '2024-09-22', estado: 'Asistió' },
    { asignatura: 'Ingles', fecha: '2024-09-22', estado: 'Asistió' },
    { asignatura: 'Arquitectura', fecha: '2024-09-22', estado: 'Asistió' },
    { asignatura: 'Portafolio', fecha: '2024-09-22', estado: 'Asistió' },
  
  ];

  constructor() {}
}
