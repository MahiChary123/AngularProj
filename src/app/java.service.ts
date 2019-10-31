import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ijavatech } from './javainterface';

@Injectable({
  providedIn: 'root'
})
export class JavaService {
  Url:string='./assets/javadetails.json'
  constructor(private http:HttpClient) { }
  getjavadetails():Observable<Ijavatech[]>{
  return this.http.get<Ijavatech[]>(this.Url)}
  
}
