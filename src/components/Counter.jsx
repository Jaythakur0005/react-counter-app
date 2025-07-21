import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const maxCount = 10;

  const increment = () => {
    if (count < maxCount) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-8">React Counter App</h1>
        
        <div className="text-8xl font-bold text-center mb-8 text-white font-mono relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg rounded-full"></div>
          {count}
        </div>

        {count < 0 && (
          <div className="bg-red-500/20 backdrop-blur text-red-200 p-3 rounded-xl text-center mb-6 font-medium border border-red-500/30">
            ⚠️ Below zero!
          </div>
        )}

        {count >= maxCount && (
          <div className="bg-yellow-500/20 backdrop-blur text-yellow-200 p-3 rounded-xl text-center mb-6 font-medium border border-yellow-500/30">
            ⚡ Maximum reached!
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={increment}
            disabled={count >= maxCount}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg"
          >
            Add (+)
          </button>

          <button
            onClick={decrement}
            className="w-full bg-gradient-to-r from-red-400 to-rose-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Subtract (-)
          </button>

          <button
            onClick={reset}
            className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter; 