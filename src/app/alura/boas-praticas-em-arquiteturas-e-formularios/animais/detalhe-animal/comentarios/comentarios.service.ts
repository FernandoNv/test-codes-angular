import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComentario, IComentarios } from './comentario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private httpClient: HttpClient) {}

  public buscarComentarios(id: number): Observable<IComentarios> {
    const url = `${API}/photos/${id}/comments`;

    return this.httpClient.get<IComentarios>(url);
  }

  //prettier-ignore
  public incluirComentario(id: number, commentText: string): Observable<IComentario> {
    const url = `${API}/photos/${id}/comments`;
    const body = {commentText};
    
    return this.httpClient.post<IComentario>(url, body);
  }
}
