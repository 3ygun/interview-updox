package com.interview;

public class Main {
    private static final String QUIT = "q";

    public static void main(String[] args) {
        Prompt prompt = new Prompt(new Asker(System.in), System.out, new PrimeNumberGenerator());
        prompt.run();
    }
}
