import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../autenticacao/usuario/usuario';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  user$: Observable<Usuario> = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['../home', { relativeTo: this.route }]);
  }
}
