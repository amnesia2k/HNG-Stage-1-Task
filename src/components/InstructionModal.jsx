import * as React from "react";
import { Target, X, Gamepad, Milestone } from "lucide-react";
import PropTypes from "prop-types";

export default function InstructionModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl transform transition-all duration-300 animate-fade-in ${
          isClosing ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">How to Play</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="text-blue-500" size={24} />
            <p>Match the RGB color shown at the top</p>
          </div>

          <div className="flex items-center gap-3">
            <Gamepad className="text-purple-500" size={24} />
            <p>Click on the matching color box</p>
          </div>

          <div className="flex items-center gap-3">
            <Milestone className="text-green-500" size={24} />
            <p>Earn points for correct matches</p>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-full mt-8 bg-purple-600 text-white py-2 px-4 rounded-lg
                     hover:bg-purple-700 font-medium transform transition-all animate-slide-up"
        >
          Start Playing
        </button>
      </div>
    </div>
  );
}

InstructionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
