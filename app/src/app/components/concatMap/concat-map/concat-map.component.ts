import { Component } from '@angular/core';
import { concatMap, forkJoin, from, map, of, tap } from 'rxjs';
import { ConcatMapService } from '../dataAccess/concat-map.service';
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

  public trackByUser(i: number, _item: User): number {
    return _item.id;
  }

  public trackByPost(i: number, _item: Post): number {
    return _item.id;
  }

}
