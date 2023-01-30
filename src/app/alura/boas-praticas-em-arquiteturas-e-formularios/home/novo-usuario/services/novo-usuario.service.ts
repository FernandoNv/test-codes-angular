import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  private baseUrl = `${API}/user`;

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
