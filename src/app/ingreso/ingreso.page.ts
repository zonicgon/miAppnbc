import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CambiarClavePage } from '../cambiar-clave/cambiar-clave.page'; // Importa la página de cambiar clave

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {
  username: string = ''; // Inicializa con un valor vacío
  password: string = ''; // Inicializa con un valor vacío
  errorMessage: string = ''; // Inicializa con un valor vacío

  constructor(private router: Router) {}

  login() {
    const validUser = 'profesor zonic';
    const validPassword = CambiarClavePage.getClaveActual(); // Obtiene la clave actual

    if (this.username === validUser && this.password === validPassword) {
      this.router.navigate(['/inicio']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }
}
