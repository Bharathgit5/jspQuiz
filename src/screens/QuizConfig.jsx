import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizConfig() {
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizType, setQuizType] = useState("riddles");
  const navigate = useNavigate();

  const handleStart = () => {
    localStorage.setItem("numQuestions", numQuestions);
    localStorage.setItem("quizType", quizType);
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h2 className="text-3xl font-bold mb-6">Configure Quiz</h2>

      <div className="mb-4">
        <label className="block text-lg mb-2">Number of Questions</label>
        <input
          type="number"
          min="1"
          max="20"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg mb-2">Select Quiz Type</label>
        <div className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg ${
              quizType === "riddles"
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setQuizType("riddles")}
          >
            Riddles
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              quizType === "normal"
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setQuizType("normal")}
          >
            Normal Questions
          </button>
        </div>
      </div>

      <button
        onClick={handleStart}
        className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800"
      >
        Start Quiz
      </button>
    </div>
  );
}
