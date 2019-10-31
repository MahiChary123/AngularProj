import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iangular } from './angularinterface';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

private Url:string='./assets/angulardetails.json'
constructor(private http:HttpClient) { }
getAngular():Observable<Iangular[]>{
return this.http.get<Iangular[]>(this.Url)}
}

