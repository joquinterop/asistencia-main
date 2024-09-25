import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.page.html',
  styleUrls: ['./professor-profile.page.scss'],
})
export class ProfessorProfilePage implements OnInit {
  receivedUser: string | undefined;
  receivedPass: string | undefined;
  cursos = [
    { nombre: 'Inglés', seccion: 'Sección 1', alumnos: 15, imagen: 'assets/images/reino-unido.png' },
    { nombre: 'Español', seccion: 'Sección 2', alumnos: 16, imagen: 'assets/images/espana.png' },
    { nombre: 'Portugués', seccion: 'Sección 3', alumnos: 15, imagen: 'assets/images/portugal.png' },
    { nombre: 'Francés', seccion: 'Sección 4', alumnos: 20, imagen: 'assets/images/francia.png' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    if (history.state) {
      this.receivedUser = history.state.user;
      this.receivedPass = history.state.pass;
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }

  navegar(curso: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        detalles: curso
      }
    };
    this.router.navigate(['/asignatura'], navigationExtras);
  }
}