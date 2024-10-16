import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../service/consumoapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: FormGroup;  

  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController, private authService: AuthserviceService) {
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

      // Lógica para determinar el tipo de usuario (profesor o estudiante)
      const userType = this.getUserType(user, pass); 

      if (userType === 'profesor') {
        //Cambiar el estado del authservice...
        this.authService.login();
        // Navegamos a la página del perfil del profesor
        this.router.navigate(['/professor-profile'], {
          state: { user, pass },
        });
      } else if (userType === 'estudiante') {
        //Cambiar el estado del authservice...
        this.authService.login();
        // Navegamos a la página del perfil del estudiante
        this.router.navigate(['/student-profile'], {
          state: { user, pass },
        });
      } else {
        alert('Usuario no encontrado o credenciales incorrectas.');
      }
    } else {
      alert('Por favor, ingresa el usuario y la contraseña correctamente.');
    }
  }

  // Función simulada para obtener el tipo de usuario
  getUserType(user: string, pass: string): string {
    if (user.includes('prof')) {
      return 'profesor';
    } else if (user.includes('stud')) {
      return 'estudiante';
    } else {
      return '';  // Usuario no encontrado
    }
  }

  // Método para redirigir a la página de reinicio de contraseña
  goToResetPassword() {
    this.router.navigate(['/reiniciar-contrasena']);
  }
}
