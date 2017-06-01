# Prime Number Generator

Make a TDD prime number generator based on a range input scheme and a prompt for it.

## Make

- Maven Test: `mvn test`
- Maven Package: `mvn package`
- Java Run: `java -cp .\target\interview-1.0.0.jar com.interview.Main`

## Process

1. Create the project skeleton (I'm using VS Code with the Java plugin and maven in PowerShell)
2. Create tests for `isPrime(int value)` then make them pass
3. Create tests for `generate(int startValue, int endValue)` then make them pass
4. Correct mistakes
5. Add prompt to `main`
    - I couldn't decide on how best to do it at first
6. Realize I need to test the prompt
7. Went down a rabbit hole of how to mock `System.in` and `System.out`
8. Extracted everything into a `Prompt` class
9. Realized I needed more testing help and added Mockito <3
10. Rewrote the `Prompt`, `Main` and `Asker` to facilitate dependency injection and testability
11. Hope I'm done going to turn in...

## Overview

Your task is to use test driven development to implement a prime number generator that returns an ordered list of all prime numbers in a given range (inclusive of the endpoints). You must implement the interface specified below. You may also create any other methods, interfaces and/or classes that you deem necessary to complete the project. You should also develop a small main program to drive your generator and to allow the user to specify the prime number range via the command line. To successfully complete the exercise, all unit tests must pass as well as provide 100% code coverage.

## Notes:

- The code should handle inverse ranges such that 1-10 and 10-1 are equivalent.
- Ensure that you run a test against the range 7900 and 7920 (valid primes are 7901,7907, 7919).

## Interface:

```java
interface PrimeNumberGenerator {
    List<Integer> generate(int startingValue, int endingValue);
    boolean isPrime(int value);
}
```

## Definition (from wikipedia):

In mathematics, a prime number (or a prime) is a natural number which has exactly two distinct natural number divisors: 1 and itself. The first twenty-six prime numbers are:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
