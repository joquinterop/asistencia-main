import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AsignaturaPage } from './asignatura/asignatura.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'professor-profile',
    loadChildren: () => import('./professor-profile/professor-profile.module').then(m => m.ProfessorProfilePageModule)
  },
  {
    path: 'student-profile',
    loadChildren: () => import('./student-profile/student-profile.module').then(m => m.StudentProfilePageModule)
  },
  {
    path: 'ingles-1',
    loadChildren: () => import('./ingles-1/ingles-1.module').then(m => m.Ingles1PageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then(m => m.GenerarQrPageModule)
  },
  {
    path: 'asignatura/:asignatura',
    loadChildren: () => import('./asignatura/asignatura.module').then(m => m.AsignaturaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
