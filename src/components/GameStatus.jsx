import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function GameStatus() {
  const { status } = React.useContext(GameContext);
  return (
    <div className="mt-4">
      <p
        data-testid="gameStatus"
        className={`text-center text-xl font-bold mb-4 ${
          status === "Correct!" ? "text-green-500" : "text-red-500"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
