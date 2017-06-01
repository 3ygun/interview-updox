package com.interview;

import java.io.PrintStream;
import java.util.Arrays;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.mockito.Mockito.*;

public class PromptTest {
    private Asker asker;
    private PrintStream out = mock(PrintStream.class);
    private PrimeNumberGenerator generator = mock(PrimeNumberGenerator.class);
    private Prompt prompt;

    @Before
    public void initialize() {
        asker = mock(Asker.class);
        out = mock(PrintStream.class);
        generator = mock(PrimeNumberGenerator.class);
        prompt = new Prompt(asker, out, generator);
    }

    @After
    public void destroy() {
        reset(asker);
        reset(out);
        reset(generator);
        prompt = null;
    }

    @Test
    public void prompt_initialQuit() {
        when(asker.ask()).thenReturn("q");
        prompt.run();

        verify(out).println("Welcome to the Prime Number Generator!");
        verify(out).println("Provide q as the answer to a prompt to quit at any time!");
        verify(out).println();
        verify(out).print("What is the starting value? ");
        verify(out).println("Quiting. Thanks Updoxs!");
    }

    @Test
    public void prompt_singleValueQuit() {
        when(asker.ask()).thenReturn("0").thenReturn("q");
        prompt.run();

        verify(out).println("Welcome to the Prime Number Generator!");
        verify(out).println("Provide q as the answer to a prompt to quit at any time!");
        verify(out).println();
        verify(out).print("What is the starting value? ");
        verify(out).print("What is the ending value? ");
        verify(out).println("Quiting. Thanks Updoxs!");
    }

    @Test
    public void prompt_1run() {
        int startingValue = 0;
        int endingValue = 12;
        List list = mock(List.class);
        when(asker.ask()).thenReturn(""+startingValue).thenReturn(""+endingValue).thenReturn("q");
        when(generator.generate(startingValue, endingValue)).thenReturn(list);

        prompt.run();

        verify(out).println("Welcome to the Prime Number Generator!");
        verify(out).println("Provide q as the answer to a prompt to quit at any time!");
        verify(out, times(3)).println();
        verify(out, times(2)).print("What is the starting value? ");
        verify(out).print("What is the ending value? ");
        out.print("Prime Numbers in the range of " + startingValue + " to " + endingValue + " are: ");
        verify(out).println(list);
        verify(out).println("Quiting. Thanks Updoxs!");
    }
}
