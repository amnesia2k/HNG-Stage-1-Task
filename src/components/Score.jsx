import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function Score() {
  const { score } = React.useContext(GameContext);
  return (
    <div>
      <p data-testid="score" className="text-center text-lg font-semibold">
        Score: {score}
      </p>
    </div>
  );
}
