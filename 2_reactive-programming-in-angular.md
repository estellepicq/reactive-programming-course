![Angular reactive programming](./assets/angular_rxjs_meme.jpeg "Angular reactive programming")

## Use case

What is happening in search case exemple. In the search example, A represents the search term, and we need to wait for the API to respond with the result before B (i.e., the search results) can be set.

(We need to explain the Sync / Async concepts for the upcoming example)

```

Synchronous reactivity -> when if B depends on A. When A updates B can instantly be updated.
- B can do anything operation with the new value instantly


Asynchronous reactivity -> A updates some amount of will have to pass before B can be updated.
- We need to wait for the API to respond with the result before B can be set.

```

Our search term changes to "J" our searchResults is derived form the search term. So it will instantly react. We take search term "J" and launch an asynchronous request to fetch data. And once it gets that data the search results will be set. 

This works fine if everything is settled before we enter in our search term next key. 
But if our let's say that, the fetch has not finished yet and search term changes again to "Jo". Our search results will instantly react by launching an other async request to fetch the data. Now we hace two requests pending.

So what will that value of our search results be ? Both of these requests will update the value of search results when they resolve so whichever request finishes second will win. This is a race condition causes so whether our application works or not is now left up to luck

To resolve this async issue, we will be use one of those 100 rxjs operates.



Async issue

```js

this.searchResults$ = this.searchControl.valueChanges.pipe(
  map(query => this.moviesService.search(query))
);

```

----

## Mapping Operators

Scenario when going to the post office counter 
There are two or more of us at the post office, but there is only one office available for sending transaction 

- ConcatMap: It's like waiting in line and respecting the order of arrival. I have to wait for the person in front of me to finish their transaction. Whether it takes 5 minutes or an hour, before it's my turn. All packages will be sent.

- MergeMap: It's like everyone is sprinting towards the counter. The packages that make it to the counter are processed without any specific order, more or less at the same time. All packages will be sent.

- ExhaustMap: I enter the post office, but there's already someone at the counter. I don't want to wait, so I leave without dropping off my package. Only the first person in line is served.

- SwitchMap: I arrive and there's a queue, but I push my way to the front of the line to get to the counter. I don't care if anyone else's packages get sent or not. In fact, it's a good thing I did because only my package will be processed.

----

## Let's go back to our example

Let's take a few moments to consider our options and decide on the best solution.

The switchMap operator is the solution to our problem, as demonstrated by this code snippet:

```js

 this.searchResults$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.moviesService.search(query)),
    );

```

SwitchMap is an explicit way to say that : if a new search term arrives and a previous search term is still being fetched to cancel the previous request and use the new request. So we able to see over only single request in network because all of the previous ones were canceled.

