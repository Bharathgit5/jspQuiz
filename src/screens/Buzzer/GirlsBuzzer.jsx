import React from "react";
import { database, ref, set } from "../../firebase"; // adjust the path if needed

export default function GirlsBuzzer() {
  const handleBuzz = () => {
    set(ref(database, "buzzerData"), { team: "girls" })
      .then(() => console.log("Buzz recorded"))
      .catch((error) => console.error("Error writing buzzerData:", error));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <button
        onClick={handleBuzz}
        className="bg-pink-600 text-white px-6 py-3 text-xl rounded-xl hover:bg-pink-700"
      >
        🎀 Girls Buzz!
      </button>
    </div>
  );
}
