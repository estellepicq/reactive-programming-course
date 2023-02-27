class ImperativeClass {
    transform() {
        const numbers = [1, 2, 3];
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] + 1;
        }
        return numbers;
    }
}
