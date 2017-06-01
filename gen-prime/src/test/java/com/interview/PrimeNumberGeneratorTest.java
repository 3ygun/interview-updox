package com.interview;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;


/**
 * To Test
 * 
 * generator(int a, int b)
 *  - Min and Max values
 *  - Increasing and Decreasing
 *  - Ranges
 * 
 * 
 * isPrime(int a)
 *  - negatives
 *  - large and small non-primes
 *  - large and small primes
 */
public class PrimeNumberGeneratorTest {
    private final List<Integer> BLANK = new ArrayList<Integer>();
    private final List<Integer> PRIMES_0_102 = Arrays.asList(new Integer[]{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101});
    private final List<Integer> PRIMES_7900_7920 = Arrays.asList(new Integer[]{7901, 7907, 7919});

    public PrimeNumberGenerator generator;

    @Before
    public void initialize() {
        generator = new PrimeNumberGenerator();
    }

    // Bounds
    @Test
    public void generate_0_1() {
        List<Integer> expected = this.BLANK;
        List<Integer> got = this.generator.generate(0, 1);
        assertEquals(expected, got);
    }

    @Test
    public void generate_0_neg10__Decreasing() {
        List<Integer> expected = this.BLANK;
        List<Integer> got = this.generator.generate(0, -10);
        assertEquals(expected, got);
    }
    
    @Test
    public void generate_neg10_0__Increasing() {
        List<Integer> expected = this.BLANK;
        List<Integer> got = this.generator.generate(-10, 0);
        assertEquals(expected, got);
    }

    @Test
    public void generate_0_2__Increasing() {
        List<Integer> expected = Arrays.asList(new Integer[]{2});
        List<Integer> got = this.generator.generate(0, 2);
        assertEquals(expected, got);
    }

    @Test
    public void generate_2_0__Decreasing() {
        List<Integer> expected = Arrays.asList(new Integer[]{2});
        List<Integer> got = this.generator.generate(2, 0);
        assertEquals(expected, got);
    }

    @Test
    public void generate_0_3() {
        List<Integer> expected = Arrays.asList(new Integer[]{2, 3});
        List<Integer> got = this.generator.generate(0, 3);
        assertEquals(expected, got);
    }

    @Test
    public void generate_0_102__Increasing() {
        List<Integer> expected = this.PRIMES_0_102;
        List<Integer> got = this.generator.generate(0, 102);
        assertEquals(expected, got);
    }

    @Test
    public void generate_102_0__Decreasing() {
        List<Integer> expected = this.PRIMES_0_102;
        List<Integer> got = this.generator.generate(102, 0);
        assertEquals(expected, got);
    }

    @Test
    public void generate_40_102__Increasing() {
        List<Integer> expected = Arrays.asList(new Integer[]{41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101});
        List<Integer> got = this.generator.generate(40, 102);
        assertEquals(expected, got);
    }

    @Test
    public void generate_102_40__Decreasing() {
        List<Integer> expected = Arrays.asList(new Integer[]{41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101});
        List<Integer> got = this.generator.generate(102, 40);
        assertEquals(expected, got);
    }

    @Test
    public void generate_7900_7920__Increasing() {
        List<Integer> expected =  this.PRIMES_7900_7920;
        List<Integer> got = this.generator.generate(7900, 7920);
        assertEquals(expected, got);
    }

    @Test
    public void generate_7920_7900__Decreasing() {
        List<Integer> expected = this.PRIMES_7900_7920;
        List<Integer> got = this.generator.generate(7920, 7900);
        assertEquals(expected, got);
    }

    // isPrime
    @Test
    public void isPrime_neg10() {
        assertFalse(this.generator.isPrime(-10));
    }
    
    @Test
    public void isPrime_neg2() {
        assertFalse(this.generator.isPrime(-2));
    }

    @Test
    public void isPrime_0() {
        assertFalse(this.generator.isPrime(0));
    }

    @Test
    public void isPrime_1() {
        assertFalse(this.generator.isPrime(1));
    }

    @Test
    public void isPrime_2() {
        assertTrue(this.generator.isPrime(2));
    }

    @Test
    public void isPrime_3() {
        assertTrue(this.generator.isPrime(3));
    }

    @Test
    public void isPrime_101() {
        assertTrue(this.generator.isPrime(101));
    }

    @Test
    public void isPrime_7901() {
        assertTrue(this.generator.isPrime(7901));
    }

    @Test
    public void isPrime_7902() {
        assertFalse(this.generator.isPrime(7902));
    }

    @Test
    public void isPrime_7903() {
        assertFalse(this.generator.isPrime(7903));
    }
}
