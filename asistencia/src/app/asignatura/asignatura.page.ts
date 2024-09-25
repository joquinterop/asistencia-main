import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  asignatura: string | null = null;
  detalles: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.asignatura = params.get('asignatura');
      this.cargarDetallesAsignatura(this.asignatura);
    });
  }

  cargarDetallesAsignatura(asignatura: string | null) {
    if (asignatura) {
      this.detalles = {
        'ingles': { nombre: 'Inglés', seccion: 'Sección 1', alumnos: 15, imagen: 'assets/images/reino-unido.png' },
        'espanol': { nombre: 'Español', seccion: 'Sección 2', alumnos: 16, imagen: 'assets/images/espana.png' },
        'portugues': { nombre: 'Portugués', seccion: 'Sección 3', alumnos: 15, imagen: 'assets/images/portugal.png' },
        'frances': { nombre: 'Francés', seccion: 'Sección 4', alumnos: 20, imagen: 'assets/images/francia.png' }
      }[asignatura];
    }
  }
}
