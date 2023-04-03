## Context

When developing angular applications while trying to code reactively, you may have encountered situations where you had no choice than manually subscribe in the component.

For example, when dealing with reactive forms: you want to trigger some side-effects when the value of an input changes.

```ts
this.nameControl.valueChanges.subscribe((value: string) => {
    this.otherControl.setValue(`${value} is the new name!`);
});
```

## Alternatives

But can we do otherwise? Is it even a good idea to try to avoid that?

=> Let's see alternatives in the showcase app ([ManualSubsComponent](/app/src/app/manual-subs/manual-subs.component.ts))

- 1st alternative: use the async pipe in the template
- 2d alternative: let something else subscribe, for example ngrx component store effect

## Conclusion

In my opinion we should not add complexity where things can be simple. Reactive programming involves less manual subscriptions, but does not forbid them.

In the previous example, even in the reactive approach, we pull data out of the stream with a `tap` operator. So in a way this is not reactive.

In conclusion, you should not avoid manual subscriptions at all costs. Please consider the use case and complexity of possible alternatives before going "all in" in reactive programming.