import { Injectable } from '@angular/core';
import {Film} from './film.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmekService {
  public film1: Film;
  public film2: Film;

  constructor(private httpClient: HttpClient) { }

  getFilmek(): Observable<Film[]> {
    return this.httpClient.get<Film[]>('/assets/data/filmek.json');
  }
}
