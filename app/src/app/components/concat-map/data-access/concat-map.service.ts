import { Injectable } from '@angular/core';
import { delay, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcatMapService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getUsers = () => {
    const usersUrl = `${this.apiUrl}/users`;
    return from(fetch(usersUrl).then((response) => response.json()))
  };

  getPosts = (userId: number) => {
    const postsUrl = `${this.apiUrl}/posts?userId=${userId}`;
    return from(fetch(postsUrl).then((response) => response.json())).pipe(delay(Math.floor(Math.random() * 5000)))
  }

}
