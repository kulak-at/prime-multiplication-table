# Prime Multiplication Table
This is an implementation of node.js cli command to generate multiplication table of n first prime numbers. The solution was created as a part for the recruitment process (October 2018).

Time spend: ~3h 20 min

# Technologies / Dependencies
- TypeScript
- Node.js (8.12)
- Mocha / Chai (for tests)

# Installation
```bash
git clone <>
cd prime-multiplication-table
yarn
yarn build
```

# Usage
```bash
Usage: node dist/index.js N [METHOD [FORMATTER]]
    
    Command generates multiplication table of N prime numbers.

    N           number                 number of prime numbers to be generated
    METHOD      sieve|bruteforce|web   algorithm used to generate prime numbers (default: sieve)
    FORMATTER   tab|csv                formatter to be used (default: tab)
```

## Examples
### Generate simple output
```bash
$ node dist/index.js 3
|   |  2 |  3 |  5 |
| 2 |  4 |  6 | 10 |
| 3 |  6 |  9 | 15 |
| 5 | 10 | 15 | 25 |
```
### Generate bigger output
```bash
$ node dist/index.js 10
|    |  2 |  3 |   5 |   7 |  11 |  13 |  17 |  19 |  23 |  29 |
|  2 |  4 |  6 |  10 |  14 |  22 |  26 |  34 |  38 |  46 |  58 |
|  3 |  6 |  9 |  15 |  21 |  33 |  39 |  51 |  57 |  69 |  87 |
|  5 | 10 | 15 |  25 |  35 |  55 |  65 |  85 |  95 | 115 | 145 |
|  7 | 14 | 21 |  35 |  49 |  77 |  91 | 119 | 133 | 161 | 203 |
| 11 | 22 | 33 |  55 |  77 | 121 | 143 | 187 | 209 | 253 | 319 |
| 13 | 26 | 39 |  65 |  91 | 143 | 169 | 221 | 247 | 299 | 377 |
| 17 | 34 | 51 |  85 | 119 | 187 | 221 | 289 | 323 | 391 | 493 |
| 19 | 38 | 57 |  95 | 133 | 209 | 247 | 323 | 361 | 437 | 551 |
| 23 | 46 | 69 | 115 | 161 | 253 | 299 | 391 | 437 | 529 | 667 |
| 29 | 58 | 87 | 145 | 203 | 319 | 377 | 493 | 551 | 667 | 841 |
```

### Generate output using bruteforce algorithm and csv formatter
```bash
$ node dist/index.js 3 bruteforce csv
,2,3,5
2,4,6,10
3,6,9,15
5,10,15,25
```

### Generate output using web hosted file (showcasing extensibility of the solution)
```bash
$ node dist/index.js 3 web
|   |  2 |  3 |  5 |
| 2 |  4 |  6 | 10 |
| 3 |  6 |  9 | 15 |
| 5 | 10 | 15 | 25 |
```

# Tests
To run tests, simply type:
```
yarn test
```

# Notes
Writing this solution I had extensibility in mind. Each part is easily replacable with another implementation of the interface. Thanks to the Factory Design Pattern we can easily add new implementations or swap them.

Table generator uses Strategy Design Pattern to provide greater level of abstraction. This way we could easily provide another method for generating table entries (sum, max, etc).

I have implemented Brute Force approach for calculating prime numbers (for each number we try to divide it by any of the smaller numbers).

Then I have implemented Sieve of Eratosthenes-based algorithm to improve the performance. It uses simple observation that for each new candidate `x` for being a prime number, all we have to do is to check it agains all prime numbers smaller than `x`. It simplifies calculations a lot reducing algorithm to `O (P(n)*n)` where `P(n)` - n-th prime number.

Web prime generation is a showcase that the solution can be extended much further. Of course it is not very useful in this way, but the same approach could be used to provide multi-threaded or even cloud solution sending requests to compute different prime ranges on different machines.

I have tried to cover the most important parts with tests. I have also added method to estimate complexity based on the function of growth. To be accurate we should include some statistical model for that and compare the median of few trials instead of relying on a single test. I think for this solution it is enough though.

# Known issues / not implemented improvements
- Table generation and formatter takes a lot of space because it computes the whole result in memory. It would be better to flush one row at the time and clear memory. Then we could have much better memory utilisation and get the first results much faster.
- Timing function should be moved to the utils file
- More unit tests