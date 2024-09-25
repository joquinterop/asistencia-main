import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { nombre: 'APP', seccion: 'Sección 10', alumnos: 30, imagen: 'assets/images/francia.png' }
  ];

  constructor(private router: Router) {}

  // Método requerido por la interfaz OnInit
  ngOnInit() {
    // Aquí puedes obtener los datos pasados a través del state (usuario y contraseña)
    if (history.state) {
      this.receivedUser = history.state.user;
      this.receivedPass = history.state.pass;
    }
  }

  // Método para navegar de vuelta
  volver() {
    this.router.navigate(['/login']); // Navega a la página de login
  }

  // Método para navegar a diferentes asignaturas
  navegar(asignatura: string) {
    this.router.navigate(['/asignatura', asignatura]); // Navega a la página de asignatura
  }
}
