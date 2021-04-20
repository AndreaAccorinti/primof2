import {Injectable} from '@angular/core';
import * as Http from 'http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utente} from '../model/utente';
import {map} from 'rxjs/operators';
interface Response {
  statusCode: number;
  body: Utente[];
}

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private baseUrl = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Response>(`${this.baseUrl}`).pipe(map(res => res.body));
  }
}
