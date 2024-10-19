import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { ConsumoapiService } from '../service/consumoapi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: FormGroup;  

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private alertController: AlertController, 
    private authService: AuthserviceService,
    private apiService: ConsumoapiService  // Servicio para la API
  ) {
    // Inicializamos el formulario con campos vacíos y validaciones
    this.usuario = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  async login() {
    if (this.usuario.valid) {
      const user = this.usuario.value.user;
      const pass = this.usuario.value.pass;
  
      // Llamada a la API para el login
      this.apiService.login(user, pass).subscribe(
        (response: any) => {
          console.log('Respuesta de la API:', response);
          if (response.tipoPerfil === 1) {
            // Perfil Profesor
            this.authService.login();
            this.router.navigate(['/professor-profile'], {
              state: { 
                nombre: response.nombre, 
                id: response.id,
                correo: response.correo,
                fotoPerfil: response.fotoPerfil  // Incluimos la foto de perfil
              }
            });
          } else if (response.tipoPerfil === 2) {
            // Perfil Estudiante
            this.authService.login();
            this.router.navigate(['/student-profile'], {
              state: { 
                nombre: response.nombre, 
                id: response.id,
                correo: response.correo,
                fotoPerfil: response.fotoPerfil  // Incluimos la foto de perfil
              }
            });
          }
        },
        async (error: any) => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Credenciales incorrectas, por favor inténtalo de nuevo.',
            buttons: ['OK']
          });
          await alert.present();
        }
      );
    }
  }
  

  goToResetPassword() {
    this.router.navigate(['/reiniciar-contrasena']);
  }
}
