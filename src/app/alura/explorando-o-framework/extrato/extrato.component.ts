import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ITransferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['../explorando-o-framework.component.scss', './extrato.component.scss']
})
export class ExtratoComponent implements OnDestroy{
  private destroySubject$ = new Subject<boolean>();
  public transferencias$: Observable<ITransferencia[]>;

  constructor(private transferenciaService: TransferenciaService){
    this.transferencias$ = this.transferenciaService.getListaTransferencias().pipe(takeUntil(this.destroySubject$));
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
