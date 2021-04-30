import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://testserver/ildike0512/movies';

  list$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);


  constructor(private http: HttpClient,) {
    this.getAll()
   }

    
  getAll(): void {
    this.http.get<Movie[]>(this.BASE_URL).subscribe((movies) => this.list$.next(movies));
  }

  getMovieList(id: number):Observable<Movie> {
    return this.http.get<Movie>(`${this.BASE_URL}${id}`);
  }

  deleteMovie(id):any {
    this.http.delete(`${this.BASE_URL}/${movie.id}`).subscribe(
      () => this.getAll());
  }
}









