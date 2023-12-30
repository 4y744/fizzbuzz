let fizzmap = {3: "Fizz", 5: "Buzz", 7: "Bazz"}

const fizzbuzz = (fmap, len) => Array(len).fill().map(() => len--).reverse().map((arg) => Object.entries(fmap).reduce((acc, [key, val]) => acc += arg % key == 0 ? val : "", "") || arg).join("\n");

console.log(fizzbuzz(fizzmap, 100))