import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, from, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class ConcatMapService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const usersUrl = `${this.apiUrl}/users`;
    return this.http.get<User[]>(usersUrl);
  };

  getPosts(userId: number): Observable<Post[]> {
    const postsUrl = `${this.apiUrl}/posts?userId=${userId}`;
    return this.http.get<Post[]>(postsUrl).pipe(
      delay(Math.floor(Math.random() * 5000))
    );
  }

}
