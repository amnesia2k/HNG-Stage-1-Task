import * as React from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameInstructions from "./components/GameInstructions";
import GameStatus from "./components/GameStatus";
import NewGameButton from "./components/NewGameButton";
import Score from "./components/Score";
import GameProvider from "./hooks/GameProvider";
import InstructionModal from "./components/InstructionModal";

export default function App() {
  const [showModal, setShowModal] = React.useState(true);

  return (
    <GameProvider>
      <InstructionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <div className="flex flex-col items-center justify-center min-h-screen text-3xl">
        <GameInstructions />
        <ColorBox />
        <ColorOptions />
        <GameStatus />
        <Score />
        <NewGameButton />
      </div>
    </GameProvider>
  );
}
