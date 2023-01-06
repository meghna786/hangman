import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import words from "./wordList.json";

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());

  const [guessedWord, setGuessedWord] = useState<string[]>([]);

  const WrongGuesses = guessedWord.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser= WrongGuesses.length >=6
  const isWinner=wordToGuess.split('').every(letter=>guessedWord.includes(letter))


  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedWord.includes(letter) || isLoser || isWinner) return;
      setGuessedWord((currentLetter) => [...currentLetter, letter]);
    },
    [guessedWord, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter, guessedWord]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key!=='Enter') return;

      e.preventDefault();
      setWordToGuess(getWord());
      setGuessedWord([]);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="App">
      <div className="in-app">
        <div style={{fontSize:'2rem', textAlign:'center'}}>
          {isWinner && "Winner! Refresh to try again"}
          {isLoser && "Nice Try! Refresh to try again"}
        </div>
      </div>
      <HangmanDrawing numberOfWrongGuesses={WrongGuesses.length} />
      <HangmanWord guessedWord={guessedWord} wordToGuess={wordToGuess}  reveal={isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          activeLetters={guessedWord.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={WrongGuesses}
          disable={isLoser || isWinner}
        />
      </div>
    </div>
  );
}

export default App;

