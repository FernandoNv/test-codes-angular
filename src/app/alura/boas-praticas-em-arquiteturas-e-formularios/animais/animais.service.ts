import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnimais, IAnimal } from './animal';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private httpCliente: HttpClient) {}

  // prettier-ignore
  public listaDoUsuario(nomeDoUsuario: string): Observable<IAnimais> {
    return this.httpCliente.get<IAnimais>(`${API}/${nomeDoUsuario}/photos`);
  }

  public buscaPorId(id: number): Observable<IAnimal> {
    const url = `${API}/photos/${id}`;

    return this.httpCliente.get<IAnimal>(url);
  }

  public excluirAnimal(id: number): Observable<IAnimal> {
    const url = `${API}/photos/${id}`;
    return this.httpCliente.delete<IAnimal>(url);
  }

  public curtir(id: number) {
    const url = `${API}/photos/${id}/like`;
    const body = {};

    return this.httpCliente.post(url, body, { observe: 'response' }).pipe(
      mapTo(true),
      catchError((error) =>
        error.status === NOT_MODIFIED ? of(false) : throwError(error)
      )
    );
  }

  public upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpCliente.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
