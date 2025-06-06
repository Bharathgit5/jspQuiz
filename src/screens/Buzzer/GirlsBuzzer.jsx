// BoysBuzzer.js (similar for GirlsBuzzer.js)
import React from "react";

export default function GirlsBuzzer() {
  const handleBuzz = () => {
    const buzzData = {
      team: "girls",
      time: Date.now(), // helps trigger event even if same team buzzes again
    };
    localStorage.setItem("buzzerData", JSON.stringify(buzzData));
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">GIRLS BUZZER</h2>
      <button
        onClick={handleBuzz}
        className="bg-pink-600 text-white px-6 py-4 rounded-xl text-xl"
      >
        BUZZ!
      </button>
    </div>
  );
}
