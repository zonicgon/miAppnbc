import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./mis-asignaturas/mis-asignaturas.module').then(m => m.MisAsignaturasPageModule)
  },
  {
    path: 'mis-asistencias',
    loadChildren: () => import('./mis-asistencias/mis-asistencias.module').then(m => m.MisAsistenciasPageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then(m => m.RegistrarAsistenciaPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then(m => m.CambiarClavePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
