import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { IAnimais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss'],
})
export class ListaAnimaisComponent implements OnInit, OnDestroy {
  public animais!: IAnimais;

  private destroySubject$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(() => {
        this.animais = this.activatedRoute.snapshot.data['animais'];
      });
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
