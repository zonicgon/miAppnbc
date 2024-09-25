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
  private static claveActual: string = '2215'; // Clave actual

  constructor(private router: Router) {}

  cambiarClave() {
    if (this.nuevaClave !== this.confirmacionClave) {
      this.mensajeError = 'Las claves no coinciden.';
      this.mensajeExito = '';
    } else {
      CambiarClavePage.claveActual = this.nuevaClave; // Cambia la clave actual
      this.mensajeExito = 'Clave cambiada exitosamente.';
      this.nuevaClave = '';
      this.confirmacionClave = '';
      this.mostrarBotonIngreso = true;
      this.mensajeError = '';
    }
  }

  irAIngreso() {
    this.router.navigate(['/ingreso']); // Redirige a la página de ingreso
  }

  static getClaveActual() {
    return this.claveActual;
  }
}
