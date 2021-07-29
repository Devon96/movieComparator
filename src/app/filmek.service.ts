import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie, MovieDetails, Response} from './movie.model';

export const API_URL = new InjectionToken('API_URL');

@Injectable({
  providedIn: 'root'
})
export class FilmekService {

  private apiUrl: string;

  constructor(private http: HttpClient, @Inject(API_URL) apiUrl?: string) {
    this.apiUrl = apiUrl;
  }

  getStartMovies(): Observable<Response> {
    return this.http.get<Response>('/assets/data/filmek.json');
  }

  getMovie(id: string): Observable<MovieDetails> {
    const url = this.apiUrl + `?apikey=9118b9a9&i=${id}`;
    return this.http.get<MovieDetails>(url);
  }

  getMovies(search: string, category: string, pageNumber: number): Observable<Response> {
    const url = this.apiUrl + `?apikey=9118b9a9&s=${search}&page=${pageNumber}&type=${category}`;
    return this.http.get<Response>(url);
  }

}
