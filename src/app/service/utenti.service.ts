import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utente} from '../model/utente';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.baseUrl}`);
  }
}
