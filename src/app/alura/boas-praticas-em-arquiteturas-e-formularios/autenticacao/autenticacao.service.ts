import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  public autenticar(
    usuario: string,
    senha: string
  ): Observable<HttpResponse<any>> {
    const url = 'http://localhost:3000/user/login';
    const body = {
      userName: usuario,
      password: senha,
    };

    return this.httpClient.post(url, body, { observe: 'response' }).pipe(
      tap((response) => {
        const authToken = response.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
