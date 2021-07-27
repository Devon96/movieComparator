import { Injectable } from '@angular/core';
import {Film} from './film.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie, MovieDetails, Response} from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class FilmekService {
  public film1: Film;
  public film2: Film;

  constructor(private http: HttpClient) { }

  getStartMovies(): Observable<Response> {
    return this.http.get<Response>('/assets/data/filmek.json');
  }

  getMovie(id: string): Observable<MovieDetails> {
    const url = `http://www.omdbapi.com/?apikey=9118b9a9&i=${id}`;
    return this.http.get<MovieDetails>(url);
  }

  getMovies(search: string, category: string, pageNumber: number): Observable<Response> {
    const url = `http://www.omdbapi.com?apikey=9118b9a9&s=${search}&page=${pageNumber}&type=${category}`;
    return this.http.get<Response>(url);
  }

}
