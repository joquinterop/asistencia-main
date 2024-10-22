import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoapiService } from '../service/consumoapi.service'; // Importamos el servicio de la API

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {
  nombre: string | undefined;
  receivedId: number | undefined;
  fotoPerfil: string | undefined;
  correo: string | undefined;

  constructor(
    private router: Router,
    private consumoAPI: ConsumoapiService // Añadimos la API
  ) {}

  ngOnInit(): void {
    // Obtenemos los datos del estudiante desde el estado del login
    if (history.state) {
      this.nombre = history.state.nombre;
      this.receivedId = history.state.id;
      this.fotoPerfil = history.state.fotoPerfil;
      this.correo = history.state.correo;
    }

    this.obtenerCursos(); // Podrías mostrar los cursos o cualquier otra data relevante
  }

  // Función para obtener información adicional, como los cursos del estudiante
  obtenerCursos() {
    if (this.receivedId) {
      this.consumoAPI.obtenerCursosEstudiante(this.receivedId).subscribe(
        (response: any) => {
          console.log('Cursos del estudiante:', response);
        },
        (error: any) => {
          console.error('Error al obtener los cursos del estudiante', error);
        }
      );
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }
}
