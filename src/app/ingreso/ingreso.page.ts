import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CambiarClavePage } from '../cambiar-clave/cambiar-clave.page'; 

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {
  username: string = ''; 
  password: string = ''; 
  errorMessage: string = ''; 

  constructor(private router: Router) {}

  login() {
    const validUser = 'profesor zonic';
    const validPassword = CambiarClavePage.getClaveActual(); 

    if (this.username === validUser && this.password === validPassword) {
      this.router.navigate(['/inicio']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }
}
