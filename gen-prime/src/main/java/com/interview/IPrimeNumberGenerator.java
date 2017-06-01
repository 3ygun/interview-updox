package com.interview;

import java.util.List;

interface IPrimeNumberGenerator {
    /**
     * Generates a List of the prime numbers between the given startingValue and endingValue.
     * 
     * @param
     *      startingValue   -- range bound 1
     *      endingValue     -- range bound 2
     * 
     * @return
     *      List<Integer>   -- list of primes between the given range bounds in increasing order
     */
    List<Integer> generate(int startingValue, int endingValue);

    /**
     * Returns if the given value is a prime number (https://en.wikipedia.org/wiki/Primality_test).
     * 
     * @param
     *      value   -- number to check
     * 
     * @return
     *      boolean -- is it prime?
     */
    boolean isPrime(int value);
}
