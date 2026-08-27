import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recurso } from '../model/recurso.model';

@Injectable({
  providedIn: 'root',
})
export class RecursoService {
  private apiUrl = 'http://localhost:8080/api/recursos';

  constructor(private http: HttpClient) {}

  // Listar todos os personal trainers
  listar(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(this.apiUrl);
  }

  // Cadastrar novo personal trainer
  cadastrar(recurso: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>(this.apiUrl, recurso);
  }
}
