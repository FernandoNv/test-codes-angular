import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransferencia } from '../models/transferencia.model';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private baseUrl: string = 'http://localhost:3000';
  private listaTransferencias: ITransferencia[] = [];

  constructor(private httpClient: HttpClient) {
    this.getListaTransferencias().pipe(take(1)).subscribe(next => {
      this.listaTransferencias = next;
    });
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  public adicionar(objTransferencia: ITransferencia): Observable<ITransferencia>{
    this.hidratar(objTransferencia);
    
    const url = `${this.baseUrl}/transferencias`;
    return this.httpClient.post<ITransferencia>(url, objTransferencia);
  }

  private hidratar(objTransferencia: ITransferencia){
    const data = new Date().toString();
    objTransferencia.data = data;
  }

  public getListaTransferencias(): Observable<ITransferencia[]>{
    const url = `${this.baseUrl}/transferencias`;
    return this.httpClient.get<ITransferencia[]>(url);
  }
}
