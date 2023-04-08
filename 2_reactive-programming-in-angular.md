## Context

Angular framework comes with RxJS. 

RxJS is a powerful reactive library that allows us to write declarative code easily.

For example, let's take this example: 

```ts
users$: Observable<User[]> = usersService.getAll();
```

```html
<p *ngFor="let user of users$ | async">{{ user.name }}</p>
```

Here, we can **describe** our variable `users$`, and directly **understand** what it is and what it contains, without reading further code in the component. 

## Learn reactive programming in Angular

But first, we have to understand the basics of Observables and RxJS operators. 

Then, we will be able to perform some logic in our variable declaration, for example:
- What about if I want to add a property `skill` to my `users$`, but still in a declarative way?
- How to handle loading effect?
- How to handle errors?

![Angular reactive programming](./assets/angular_rxjs_meme.jpeg "Angular reactive programming")

The first approach many developers have is to go for an imperative style of coding.

For example, for the error handling & users transformation, I could write something like that:

```ts
users$: Observable<User[]> = usersService.getAll();
localUsers: User[];
error: Error;

ngOnInit() {
  this.users$.subscribe(
    result => this.localUsers = result.map(user => ({ ...user, skill: '' })),
    error => this.error = error
  );
}
```

But as soon as I do that, I have to remember to make sure to **unsubscribe** from this subscription, and I introduce new variables which are disconnected from my `users$` stream. Now, if `users$` changes, I have to keep in sync `localUsers` and `error`, which can lead to bugs and unexpected behaviors as the application grows.

Instead, let's try to refactor this code in a more declarative way, with the help of RxJS operators.

```ts
users$: Observable<User[]> = usersService.getAll();
error$ = this.users$.pipe(
  ignoreElements(), // will ignore all elements which are not errors
  catchError((err) => of(err))
)
```

Now we have only **declared** what we want, we can let streams be updated and emit naw data without needing to synchronize data.


