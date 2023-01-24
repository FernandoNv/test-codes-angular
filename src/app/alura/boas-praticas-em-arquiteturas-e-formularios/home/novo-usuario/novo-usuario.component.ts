import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './validadores/minusculo.validator';
import { NovoUsuario } from './services/novo-usuario';
import { NovoUsuarioService } from './services/novo-usuario.service';
import { UsuarioExisteService } from './services/usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './validadores/usuario-senha-iguais.validator';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
})
export class NovoUsuarioComponent implements OnInit {
  public novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // validação de campos - sincrona e assincrona(verificar se existe um username ja cadastrado)
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator],
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService
        .cadastraNovoUsuario(novoUsuario)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.router.navigate(['../../home'], { relativeTo: this.route });
          },
          error: (error) => {
            this.router.navigate(['../../home'], { relativeTo: this.route });
          },
        });
    }
  }

  get email() {
    return this.novoUsuarioForm.get('email');
  }

  get fullName() {
    return this.novoUsuarioForm.get('fullName');
  }

  get userName() {
    return this.novoUsuarioForm.get('userName');
  }

  get password() {
    return this.novoUsuarioForm.get('password');
  }
}
