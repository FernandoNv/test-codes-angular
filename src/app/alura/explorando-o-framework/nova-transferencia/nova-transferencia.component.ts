import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ITransferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['../explorando-o-framework.component.scss', './nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  public valor: number = 0;
  public destino: string = '';
  public data: Date | undefined;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  public transferir(): void{
    console.log('Nova solicitação');
    
    const objTransferir: ITransferencia = {
      valor: this.valor,
      destino: this.destino
    }

    this.transferenciaService.adicionar(objTransferir).pipe(take(1)).subscribe({
      next: (next) => {
        console.log(next);
        this.limparCampo();
        
        this.router.navigate(['../extrato'], {relativeTo: this.route});
      },
      error: (error) => console.log(error) 
    });
  }

  private limparCampo(): void{
    this.valor = 0;
    this.destino = '';
  }
}
