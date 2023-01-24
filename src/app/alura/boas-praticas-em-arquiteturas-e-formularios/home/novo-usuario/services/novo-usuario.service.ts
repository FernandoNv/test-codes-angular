import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  private baseUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}

  //prettier ignore
  public cadastraNovoUsuario(
    novoUsuario: NovoUsuario
  ): Observable<NovoUsuario> {
    const url = `${this.baseUrl}/signup`;
    return this.httpClient.post<NovoUsuario>(url, novoUsuario);
  }

  public verificaUsuarioExiste(nomeUsuario: string): Observable<boolean> {
    const url = `${this.baseUrl}/exists/${nomeUsuario}`;
    return this.httpClient.get<boolean>(url);
  }
}
