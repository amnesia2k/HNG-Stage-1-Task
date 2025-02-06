import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function ColorOptions() {
  const { colors, handleGuess } = React.useContext(GameContext);
  return (
    <div className="grid grid-cols-3 gap-4">
      {colors.map((color, idx) => (
        <button
          key={idx}
          data-testid="colorOption"
          className="w-24 h-12 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105"
          style={{ backgroundColor: color }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
}
