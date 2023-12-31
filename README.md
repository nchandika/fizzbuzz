# JS-FizzBuzz

Solution to the the classic [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) problem in JavaScript with some math! 

### Running the Show
To witness this visual treat, try:

```bash
node fizzbuzz.js
```

```bash
npm run fizzbuzz
```

Or simply just paste the code in to your browser console!

### What is happening

Is it really the most complicated FizzBuzz? I don't think so. You will agree once you look more deeply into it

```js
  1   | for (let x = 1; x <= 100; x++) 
      |  console.log(
  2   |    Array.from(
      |      {
  3   |        length:
  4   |          Math.max(
  |   |            Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 3 / 2)) / 12))) *
  |   |              4,
  |   |            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 5)) / 20))) * 8
  |   |          ) -
  |   |          Math.max(
  |   |            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
  |   |              4,
  |   |            Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 5 / 2)) / 20))) *
  |   |              8 -
  |   |              Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
  |   |              4,
  |   |            0
  +   |          ),
      |      },
  5   |      (_, i) =>
  |   |        Math.max(
  |   |          Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 3 / 2)) / 12))) * 4 -
  |   |            4,
  |   |          Math.floor(Math.abs(Math.sin((4 * Math.PI * (x - 5 / 2)) / 20))) * 8 -
  |   |            Math.floor(Math.abs(Math.cos((4 * Math.PI * (x - 3)) / 12))) * 4 -
  |   |            4,
  |   |          0
  +   |        ) + i
      |    )
      |      .map((x) =>
  6   |        String.fromCharCode(
  |   |          Math.round(
  |   |            (53 * x ** 7) / 420 -
  |   |              (539 * x ** 6) / 180 +
  |   |              (83 * x ** 5) / 3 -
  |   |              (4507 * x ** 4) / 36 +
  |   |              (5717 * x ** 3) / 20 -
  |   |              (13694 * x ** 2) / 45 +
  |   |              (853 * x) / 7 +
  +   |              102
      |          )
      |        )
      |      )
      |      .join("") || x
      |  );
      |}
```

1. Loop
2. This will create array from length specified in (3) and map function specified in (5)
For example at i=3,6,9... array will be [0,1,2,3], i=5,10.. array will be [4,5,6,7], i=15,30.. array will be [0,1,2,3,4,5,6,7] otherwise []
3. length of the created array i=3,6,9.. & i=5,10.. length will be 4, i=15,30.. length will be 8 otherwise 0
4. These functions are nothing but creates a series for 3,5 and 15, you can you graphing tools to visualize those
5. Map func transform the Array.from mapper index so that desired outcome mentioned by (2) is archived
6. This polynomial convert the array generated by (2) to desired fizzbuzz ascii values


### The Creator
This is crafted by Nadeeshan Chandika while looking for a way to waste the time 😃
