import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iwebtech } from './webinterface';

@Injectable({
  providedIn: 'root'
})
export class WebService {
Url:string='./assets/webdetails.json'
  constructor(private http:HttpClient) { }
  getwebdetails():Observable<Iwebtech[]>{
  return this.http.get<Iwebtech[]>(this.Url)}
}
