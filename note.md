## What is reactive programming

What is reactive programming? It's a programming paradigm that responds to events, such as button clicks, search inputs, and HTTP requests, among others. In JavaScript, every event triggers an action. Reactive programming allows consistent and standardized reactions to each event.


- JS Events (imperative)

```js

button.addEventListner('click', reaction)

fetch('http://nutrimetrics.api.com').then(reaction)

setInterval(reaction, 1000)

```

- Observable (declarative)

```js
import { fromEvent } from "rxjs";
import { ajax } from "rxjs";
import { interval } from "rxjs";

const button = document.querySelector("button");

const buttonClick$ = fromEvent(button, "click");
const nutrimetrics$ = ajax.getJSON("http://nutrimetrics.api.com");
const interval$ = interval(1000);

buttonClick$.subscribe(reaction);
nutrimetrics$.subscribe(reaction);
interval$.subscribe(reaction);

```


----


## Use case

What is happening in search case exemple, we need to wait for the API to respond with the result before B can be set.  
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

___

## Conclusion

Don't think Rxjs is over complicated, it gives you the tools necessary to deal with complex issues in applications.

RxJS can seem complicated. However, this does not mean that you absolutely have to develop in a declarative manner or use RxJS. It is perfectly possible to develop applications using an imperative approach.

The imperative approach consists of describing step by step what the program should do to achieve a specific goal. This is a very common approach in web development and has been used for years.

If you want to code declaratively then you are going to need rxjs or you are going to need something else that does the same things that rxjs. The declarative approach allows you to describe what you want to accomplish rather than how you want to do it, which can make the code easier to read and maintain in the long term. This can be particularly useful for complex applications with many user interactions.

Ultimately, there is no good or bad code, there are simply different approaches that may be suitable for different needs. As a developer, you should choose the approach that best suits your situation and personal preferences.
