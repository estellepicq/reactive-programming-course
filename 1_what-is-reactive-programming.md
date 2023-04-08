## What is reactive programming

What is reactive programming?

It is a programming paradigm concerned with data streams and the propagation of change.

It is about describing what we have, as opposed to tell the program how we want it to behave.

Let's take the following examples to have a better understanding of this concept:

1. Imperative approach

```js
class ImperativeClass {
    transform() {
        const numbers = [1, 2, 3];
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] + 1;
        }
        return numbers;
    }
}
```

2. Declarative approach

```js
class ReactiveClass {
    transform() {
        const numbers = [1, 2, 3];
        return numbers.map(number => number + 1);
    }
}
```
