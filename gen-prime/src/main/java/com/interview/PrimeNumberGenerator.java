package com.interview;

import java.util.ArrayList;
import java.util.List;

class PrimeNumberGenerator implements IPrimeNumberGenerator {
    public List<Integer> generate(int startingValue, int endingValue) {
        return new ArrayList<Integer>();
    }
    public boolean isPrime(int value) {
        if (value < 2) {
            return false;
        } else if (value == 2) {
            return true;
        } else if (value % 2 == 0) {
            // isEven and not 2
            return false;
        } else {
            return isPrimeOddOnly(value);
        }
    }

    private boolean isPrimeOddOnly(int value) {
        int max = (int)Math.floor(Math.sqrt(value));
        for (int i = max; i > 1; i -= 2) {
            // Is there a number between 2 to sqrt(value) that is evenly divisible? 
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }
}
