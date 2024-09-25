import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  detalles: any;
  alumnos = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María López' },
    { nombre: 'Carlos Ruiz' },
    { nombre: 'Ana Torres' },
    { nombre: 'Luis González' },
    { nombre: 'Juan Toloza' },
    { nombre: 'Valentin Navarro' },
    { nombre: 'Fernando Ronda' },
    { nombre: 'Inas Solis' },
    { nombre: 'Jose Quintero' },
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.detalles = navigation.extras.state['detalles'];
    }
  }

  ngOnInit() {
    if (!this.detalles) {
      console.error('No se recibieron detalles de la asignatura');
    }
  }
}
