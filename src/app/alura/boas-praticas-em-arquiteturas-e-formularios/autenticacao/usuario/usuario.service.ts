import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT(): void {
    const token = this.tokenService.retornaToken() ?? '';
    try {
      const usuario = jwtDecode(token) as Usuario;
      this.usuarioSubject.next(usuario);
    } catch (error) {
      console.log('Deu ruim na conversão do token para usuario ', error);
      this.tokenService.excluiToken();
      this.usuarioSubject.next({});
    }
  }

  public retornaUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  public salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  public logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  public estaLogado() {
    this.tokenService.possuiToken();
  }
}
