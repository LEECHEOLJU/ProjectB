"use client";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-green-400 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-8 animate-bounce">🦁</div>
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Zoo Tycoon
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse [animation-delay:0.4s]"></div>
        </div>
        <p className="text-white/80 mt-4">Loading your zoo...</p>
      </div>
    </div>
  );
}
