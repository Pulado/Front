import React from "react";
import KeyBoardRow from "./tecladoRow";

const Teclado = ({ handleKeyboardClick, enteredLetters }) => {
  const firstRow = "qwertyuiop".split("");
  const secondRow = "asdfghjkl".split("");
  const thirdRow = "zxcvbnm".split("");
  const rows = [firstRow, secondRow, thirdRow];
  return (
    <div className="teclado">
      {rows.map((row, index) => {
        return (
          <KeyBoardRow
            handleKeyboardClick={handleKeyboardClick}
            keysArray={row}
            key={index}
            enteredLetters={enteredLetters}
          />
        );
      })}
    </div>
  );
};

export default Teclado;
