import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz Buzzer App!</h1>
      <button
        onClick={() => navigate("/topics")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Create Quiz
      </button>
    </div>
  );
}
