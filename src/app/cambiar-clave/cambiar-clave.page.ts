import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage {
  nuevaClave: string = '';
  confirmacionClave: string = '';
  mensajeError: string = '';
  mensajeExito: string = '';
  mostrarBotonIngreso: boolean = false; 
  private static claveActual: string = 'MiClav3'; // Clave actual

  constructor(private router: Router) {}

  cambiarClave() {
    if (this.nuevaClave !== this.confirmacionClave) {
      this.mensajeError = 'Las claves no coinciden.';
      this.mensajeExito = '';
    } else {
      CambiarClavePage.claveActual = this.nuevaClave; 
      this.mensajeExito = 'Clave cambiada exitosamente.';
      this.nuevaClave = '';
      this.confirmacionClave = '';
      this.mostrarBotonIngreso = true;
      this.mensajeError = '';
    }
  }

  irAIngreso() {
    this.router.navigate(['/ingreso']); 
  }

  static getClaveActual() {
    return this.claveActual;
  }
}
