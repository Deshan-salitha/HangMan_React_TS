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
  activeLetters: string[]
  inactiveLetters: string[]
  addingaGuessedLetter: (letter: string) => void
  disabled?: boolean
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addingaGuessedLetter,
  disabled,
}: KeyBoardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addingaGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive || disabled ? styles.inactive : ""
            }`}
            disabled={disabled || isActive || isInactive}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
