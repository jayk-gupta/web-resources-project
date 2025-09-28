function GameBackground({ children }) {
  return (
    <div 
      className="min-h-screen 
                  // 1. Set the background to solid, deep black
                  bg-gray-950 
                  text-white font-game relative overflow-hidden"
    >
      {/* 2. REMOVE the floating glowing blobs as they conflict with the red/black theme */}
      {/* <div className="absolute top-10 left-20 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div> */}
      {/* <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-bounce"></div> */}
      
      // 3. Optional: Add subtle background noise/texture for a 'tech' feel
      {/* You might need external CSS for a true texture, but this adds a subtle dark overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10">
          {children}
      </div>
    </div>
  );
}
export default GameBackground;