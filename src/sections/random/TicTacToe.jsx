import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <section className="py-20 bg-secondary flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-tertiary mb-8">
        XOXO Game 🎮
      </h1>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-20 h-20 sm:w-28 sm:h-28 text-3xl sm:text-5xl font-bold bg-primary rounded-lg shadow hover:scale-105 transition-all"
          >
            {cell}
          </button>
        ))}
      </div>

      {winner ? (
        <p className="text-2xl font-semibold text-tertiary mb-4">
          🎉 Winner: {winner}
        </p>
      ) : (
        <p className="text-xl text-primary mb-4">
          Next Player: {isXNext ? "X" : "O"}
        </p>
      )}

      <button
        onClick={restartGame}
        className="px-6 py-3 bg-tertiary text-primary rounded-xl shadow hover:scale-105 transition-all"
      >
        Restart
      </button>
    </section>
  );
};

// Helper: check for winner
function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;
