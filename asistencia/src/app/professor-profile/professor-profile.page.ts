import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoapiService } from '../service/consumoapi.service';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.page.html',
  styleUrls: ['./professor-profile.page.scss'],
})
export class ProfessorProfilePage implements OnInit {
  nombre: string | undefined;
  receivedId: number | undefined;
  fotoPerfil: string | undefined;  // Campo para la foto de perfil
  fecha: string | undefined;
  correo: string | undefined;  // Agregado para mostrar el correo del profesor
  cursos: any[] = [];

  constructor(
    private router: Router, 
    private consumoAPI: ConsumoapiService
  ) {}

  ngOnInit(): void {
    // Verificamos si los datos vienen de la navegación (login)
    if (history.state) {
      this.nombre = history.state.nombre;
      this.receivedId = history.state.id;
      this.fotoPerfil = history.state.fotoPerfil;
      this.correo = history.state.correo;  // Agregado para obtener el correo
    }

    // Obtener los cursos del profesor
    this.getCursos();
    this.fecha = this.formatearFecha(new Date());  // Formatear la fecha actual
  }

  getCursos() {
    if (this.receivedId) {
      this.consumoAPI.obtenerCursosProfesor(this.receivedId).subscribe(
        (response: any) => {
          this.cursos = response;  // Guardamos los cursos recibidos
        },
        (error: any) => {
          console.error('Error al obtener los cursos del profesor', error);
        }
      );
    }
  }

  formatearFecha(fecha: Date): string {
    const opciones = { day: '2-digit', month: 'short', year: 'numeric' } as const;
    return fecha.toLocaleDateString('es-ES', opciones).replace(/\./g, '');
  }

  navegar(curso: any) {
    this.router.navigate(['/asignatura'], { state: { detalles: curso } });
  }
}
