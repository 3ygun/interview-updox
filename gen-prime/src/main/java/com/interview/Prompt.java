package com.interview;

import java.io.PrintStream;

public class Prompt {
    private static final String QUIT = "q";
    private final Asker asker;
    private final PrintStream out;
    private final PrimeNumberGenerator generator;

    public Prompt(Asker asker, PrintStream out, PrimeNumberGenerator generator) {
        this.asker = asker;
        this.out = out;
        this.generator = generator;
    }

    public void run() {
        out.println("Welcome to the Prime Number Generator!");
        out.println("Provide q as the answer to a prompt to quit at any time!");
        out.println();
        try {
            while (true) {
                int startingValue = prompt("What is the starting value? ");
                int endingValue = prompt("What is the ending value? ");

                out.println();
                out.print("Prime Numbers in the range of " + startingValue + " to " + endingValue + " are: ");
                out.println(generator.generate(startingValue, endingValue));
                out.println();
            }
        } catch (QuitException e) {
            out.println(e.getMessage());
        }
    }

    public int prompt(String message) throws QuitException {
        while (true) {
            out.print(message);
            String line = asker.ask();
            try {
                if (line.toLowerCase().equals(QUIT)) {
                    throw new QuitException("Quiting. Thanks Updoxs!");
                } else {
                    return Integer.parseInt(line);
                }
            } catch (NumberFormatException e) {
                out.println("Retry! Number or q");
            }
        }
    }
}
