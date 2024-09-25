import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  detalles: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.detalles = navigation.extras.state['detalles'];
    }
  }

  ngOnInit() {
    if (!this.detalles) {
      console.error('No se recibieron detalles de la asignatura');
      // Aquí podrías agregar una redirección a la página anterior o mostrar un mensaje de error
    }
  }
}
