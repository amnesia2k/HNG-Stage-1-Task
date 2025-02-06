export default function GameInstructions() {
  return (
    <div>
      <h3 className="text-center text-xl font-bold">Color Guessing Game</h3>
      <p
        data-testid="gameInstructions"
        className="text-center text-lg font-semibold mb-3"
      >
        Guess the correct color!
      </p>
    </div>
  );
}
