import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlojamientosService {

  constructor(private http: HttpClient) { }

  getAlojamientos(): Observable<any> {
    return this.http.get<any>('/assets/files/alojamientos.json');
  }
}
