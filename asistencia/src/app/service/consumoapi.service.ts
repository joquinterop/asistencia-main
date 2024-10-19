import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };
  
  apiURL = 'http://127.0.0.1:5000';  // Cambia la URL si es necesario

  constructor(private httpClient: HttpClient) { }

  // Método para login
  login(user: string, password: string): Observable<any> {
    const loginData = { user, password };
    return this.httpClient.post(`${this.apiURL}/login`, loginData, this.httpOptions).pipe(
      retry(1)
    );
  }

  // Método para obtener los cursos de un profesor
  obtenerCursosProfesor(profesorId: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/profesores/${profesorId}/cursos`, this.httpOptions).pipe(
      retry(1)
    );
  }

  // Otros métodos que puedas tener...
}
