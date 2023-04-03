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
