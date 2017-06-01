package com.interview;

import java.io.InputStream;
import java.util.Scanner;

/**
 * Encapsolates Scanner for mocking...
 * 
 * What this guy said to do: https://stackoverflow.com/questions/6415728/junit-testing-with-simulated-user-input
 */
public class Asker {
    private final Scanner scanner;

    public Asker(InputStream in) {
        this.scanner = new Scanner(in);
    }

    public String ask() {
        return scanner.nextLine();
    }
}