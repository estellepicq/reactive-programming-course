## What are signals?

Angular is going to rely on a reactive mechanism called Signals to make change detection more lightweight and powerful.

Signals will be available from Angular 16. Similar to standalone components, they initially come as a developer preview so that early adopters can gain initial experience. At the time this article was written, a first beta with Signal support is already available.

A signal looks like this:

```ts
count = signal(0);
double = computed(() => this.count() * 2);
```

And can be updated like this:
```ts
this.count.set(10);
```

Signals basic purpose is to hold a value. The interesting part is when the signal value changes, all the other variables that depend on it will change too.

## Why is it interesting for Angular

With signals, the Angular team is able to change how the change detection runs, which is currently handled by zone.js. Zone.js can find out when an event handler has run and notifies Angular that the change detection can be applied. This works pretty well but there are a few inconvenients with this approach: 
- errors inside of zone.js can be difficult to debug
- zone.js is not that light (~100 kb)
- when changes are made, entire components including their parents are checked in the component tree. 

On another side, signals are probably easier to learn and understand compared to rxjs observables. That will probably lead to less complicated and risky code.

## Does it have an impact on reactive programming in Angular?

The use of signals will most probably replace all major use cases for Subjects, BehaviorSubjects, and RxJS operators in our components and services, but we will still need RxJS to deal with asynchronous reactivity.

I think signals can be seen as a tool which greatly helps and improves Angular reactive programming experience, as it provides a simple way to handle local state synchronization.

To be able to fully adopt this new tool, we also need it to be compatible with RxJS. In future releases we should have a way to convert signals to observables (`fromSignal`) and observables to signals (`fromObservable`).

For those using NgRx, a `fromStore` selector method should also be available.

## Relative code samples

[Signals component](/app/src/app/signals/signals.component.ts)