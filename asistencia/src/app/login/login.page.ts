import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: FormGroup;  // Declaramos el formulario

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializamos el formulario con campos vacíos y validaciones
    this.usuario = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  login() {
    if (this.usuario.valid) {
      const user = this.usuario.value.user;
      const pass = this.usuario.value.pass;

      // Navegamos a la página del perfil del profesor con los datos del usuario y contraseña
      this.router.navigate(['/professor-profile'], {
        state: { user, pass },
      });
    } else {
      alert('Por favor, ingresa el usuario y la contraseña correctamente.');
    }
  }

  // Método para redirigir a la página de reinicio de contraseña
  goToResetPassword() {
    this.router.navigate(['/reiniciar-contrasena']); // Asegúrate de que la ruta sea correcta
  }
}
