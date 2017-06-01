package com.interview;

import java.util.Scanner;

public class Prompt {
    private static final String QUIT = "q";

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        PrimeNumberGenerator generator = new PrimeNumberGenerator();

        System.out.println("Welcome to the Prime Number Generator!");
        System.out.println("Provide q as the answer to a prompt to quit at any time!");
        System.out.println();
        while (true) {
            PromptResult result;

            result = prompt("What is the starting value? ", in);
            if (result.quit) {
                break;
            }
            int startingValue = result.value;

            result = prompt("What is the ending value? ", in);
            if (result.quit) {
                break;
            }
            int endingValue = result.value;

            System.out.println();
            System.out.println("Prime Numbers in the range of " + startingValue + " to " + endingValue + " are:");
            System.out.println(generator.generate(startingValue, endingValue));
            System.out.println();
        }
        System.out.println("Thanks Updoxs!");
    }

    private static PromptResult prompt(String message, Scanner in) {
        while (true) {
            System.out.print(message);
            try {
                String line = in.nextLine();
                if (line.toLowerCase().equals(QUIT)) {
                    return new PromptResult(true, 0);
                } else {
                    return new PromptResult(false, Integer.parseInt(line));
                }
            } catch (NumberFormatException e) {
                System.out.println("Retry! Number or q");
            }
        }
    }
}
