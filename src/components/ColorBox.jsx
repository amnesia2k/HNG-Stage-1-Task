import * as React from "react";
import { GameContext } from "../hooks/GameContext";

export default function ColorBox() {
  const { targetColor, color } = React.useContext(GameContext);
  return (
    <div
      data-testid="colorBox"
      className="w-36 h-36 mx-auto my-4 rounded-md shadow-lg"
      style={{ backgroundColor: targetColor }}
      onClick={() => alert(color)}
    ></div>
  );
}
