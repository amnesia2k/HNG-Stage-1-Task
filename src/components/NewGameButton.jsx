import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function NewGameButton() {
  const { initGame } = React.useContext(GameContext);
  return (
    <button
      data-testid="newGameButton"
      className="mx-auto mt-4 px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 text-lg font-semibold cursor-pointer"
      onClick={initGame}
    >
      New Game
    </button>
  );
}
