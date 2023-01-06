import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  addGuessedLetter: (letter: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disable: boolean;
};

export const Keyboard = ({
  addGuessedLetter,
  activeLetters,
  inactiveLetters,
  disable,
}: KeyBoardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isactive = activeLetters.includes(key);
        const isinactive = inactiveLetters.includes(key);
        return (
          <button
            disabled={isinactive || isactive || disable}
            className={`${styles.btn} ${isactive ? styles.active : ""} ${
              isinactive ? styles.inactive : ""
            }`}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
