import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../model/agendamento.model';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = 'http://localhost:8080/api/agendamentos';

  constructor(private http: HttpClient) {}

  // Listar todos os agendamentos
  listar(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  // Criar um novo agendamento (já validando se o horário está ocupado no backend)
  cadastrar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  // Deletar / Cancelar um agendamento pelo ID
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
