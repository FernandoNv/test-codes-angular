import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public usuario: string = '';
  public senha: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: (next) => {
        this.router.navigate(['../animais'], { relativeTo: this.route });
      },
      error: (error) => {
        console.log(error);
        alert('Usuário ou senha inválido');
        // this.router.navigate(['../animais'], { relativeTo: this.route });
      },
    });
  }
}
