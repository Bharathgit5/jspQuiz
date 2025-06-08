import React from "react";
import { database, ref, set } from "../../firebase"; // adjust the path if needed

export default function BoysBuzzer() {
  const handleBuzz = () => {
    set(ref(database, "buzzerData"), { team: "boys" })
      .then(() => console.log("Buzz recorded"))
      .catch((error) => console.error("Error writing buzzerData:", error));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <button
        onClick={handleBuzz}
        className="bg-blue-600 text-white px-6 py-3 text-xl rounded-xl hover:bg-blue-700"
      >
        🧢 Boys Buzz!
      </button>
    </div>
  );
}
