function GameHUD({ xp, level }) {
  return (
    <div className="fixed top-4 left-4 bg-black/70 border-2 border-pink-500 text-pink-300 
                    px-4 py-3 rounded-lg shadow-lg">
      <p>⭐ Level {level}</p>
      <div className="w-40 h-3 bg-gray-700 rounded-full mt-2 border border-pink-400">
        <div
          className="h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
          style={{ width: `${(xp / (level * 100)) * 100}%` }}
        ></div>
      </div>
      <p className="text-xs mt-1">{xp}/{level * 100} XP</p>
    </div>
  );
}
export default GameHUD;
