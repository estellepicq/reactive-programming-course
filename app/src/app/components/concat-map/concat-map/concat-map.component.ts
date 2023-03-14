import { Component } from '@angular/core';
import { concatMap, forkJoin, map } from 'rxjs';
import { ConcatMapService } from '../data-access/concat-map.service';
interface User {
  id: number;
  name: string;
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  threeFirstUsers$ = this.blogService.getUsers().pipe(map(users => users.slice(0, 3)))
  threeFirstUsersWithPosts$ = this.threeFirstUsers$.pipe(
    concatMap((users: User[]) =>
      forkJoin(
        users.map(user => this.blogService.getPosts(user.id).pipe(
          map(posts => ({ id: user.id, name: user.name, posts }))
        ))
      )
    )
  );

  constructor(private blogService: ConcatMapService) {
  }

  ngOnInit(): void {
  }

  public trackByUser(i: number, item: User): number {
    return item.id;
  }

  public trackByPost(i: number, item: Post): number {
    return item.id;
  }

}
