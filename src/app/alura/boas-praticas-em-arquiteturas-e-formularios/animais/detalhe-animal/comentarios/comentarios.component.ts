import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { IComentarios } from './comentario';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  @Input()
  public idFoto!: number;

  public comentarios$!: Observable<IComentarios>;
  public comentarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private comentariosService: ComentariosService
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscarComentarios(this.idFoto);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  public get comentario() {
    return this.comentarioForm.get('comentario');
  }

  public gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .incluirComentario(this.idFoto, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscarComentarios(this.idFoto)),
        tap(() => {
          this.comentarioForm.reset();
          alert('Comentário salvo');
        })
      );
  }
}
