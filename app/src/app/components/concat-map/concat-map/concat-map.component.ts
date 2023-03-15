import { Component } from '@angular/core';
import { concatMap, forkJoin, map } from 'rxjs';
import { ConcatMapService, User } from '../data-access/concat-map.service';


@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  threeFirstUsers$ = this.concatMapService.getUsers().pipe(map(users => users.slice(0, 3)))
  threeFirstUsersWithPosts$ = this.threeFirstUsers$.pipe(
    concatMap((users: User[]) =>
      forkJoin(
        users.map(user => this.concatMapService.getPosts(user.id).pipe(
          map(posts => ({ id: user.id, name: user.name, posts }))
        ))
      )
    )
  );

  constructor(
    private concatMapService: ConcatMapService
  ) { }

}
