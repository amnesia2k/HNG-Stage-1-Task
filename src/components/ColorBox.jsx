import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function ColorBox() {
  const { targetColor, color } = React.useContext(GameContext);
  return (
    <div
      data-testid="colorBox"
      className="w-36 h-36 mx-auto mb-4 mt-8 rounded-md shadow-lg animate-bounce"
      style={{ backgroundColor: targetColor }}
      onClick={() => alert(color)}
    ></div>
  );
}
