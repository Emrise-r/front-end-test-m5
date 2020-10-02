import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBooks} from './ibooks';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }
  getAllBooks(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(API_URL);
  }
  createBook( book: IBooks): Observable<IBooks> {
    return this.http.post<IBooks>(API_URL, book);
  }
  deleteBook(id: number): Observable<IBooks> {
    return this.http.delete<IBooks>(API_URL + `${id}`);
  }
  findBookById(id: number): Observable<IBooks>{
    return this.http.get<IBooks>(API_URL + `${id}`);
  }
  updateBook(id: number, book: IBooks): Observable<IBooks> {
    return this.http.put<IBooks>(API_URL + `${id}`, book);
  }
}
