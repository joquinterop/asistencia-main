import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' :'*' }) } 

  apiURL = 'http://127.0.0.1:5000';

  constructor(private HttpClient:HttpClient ) { }
  getPosts():Observable<any>{
    return this.HttpClient.get(this.apiURL+'/profesores').pipe(retry(3));
    }
    
}
