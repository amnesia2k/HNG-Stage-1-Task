import * as React from "react";
import PropTypes from "prop-types";
import { GameContext } from "./GameContext";

export default function GameProvider({ children }) {
  const [targetColor, setTargetColor] = React.useState("");
  const [colors, setColors] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const [score, setScore] = React.useState(0);

  const getRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    // console.log(randomColor);

    return randomColor;
  };

  const newColors = Array.from({ length: 6 }, getRandomColor);
  const randomTarget = newColors[Math.floor(Math.random() * newColors.length)];
  const initGame = () => {
    // console.log("New Target Color:", randomTarget);

    setColors(newColors);
    setTargetColor(randomTarget);
    setStatus("");
    setScore(0);
  };

  const handleGuess = (color) => {
    // console.log("Target:", targetColor);
    if (color === targetColor) {
      setStatus("Correct!");
      setScore((prevScore) => prevScore + 1);
      setColors(newColors);
      setTargetColor(randomTarget);
    } else {
      setStatus("Incorrect!, Please Try Again");
    }

    setTimeout(() => {
      setStatus("");
    }, 1000);
  };

  React.useEffect(() => {
    initGame();
  }, []);

  const value = {
    targetColor,
    colors,
    status,
    score,
    handleGuess,
    initGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
