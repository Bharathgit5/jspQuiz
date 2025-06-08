import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import boysImg from "../assets/boysImg.webp";
import girlImg from "../assets/girlImg.avif";
import { database, ref, onValue, remove } from "../firebase";

export default function QuizPlay() {
  const [questions, setQuestions] = useState([
    "What is JavaScript?",
    "What is closure?",
    "What is DOM?",
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [boysScore, setBoysScore] = useState(0);
  const [girlsScore, setGirlsScore] = useState(0);
  const [buzzerTeam, setBuzzerTeam] = useState(null);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const [showTopicPrompt, setShowTopicPrompt] = useState(false);
  const [topics] = useState(["JavaScript", "React", "HTML", "CSS", "Java", "DBMS"]);

  useEffect(() => {
    const buzzerRef = ref(database, "buzzerData");
    const unsubscribe = onValue(buzzerRef, (snapshot) => {
      const data = snapshot.val();
      if (data && !buzzerTeam) {
        console.log("Buzz from Firebase:", data.team);
        setBuzzerTeam(data.team);
        setTimer(10);
      }
    });

    return () => unsubscribe();
  }, [buzzerTeam]);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setBuzzerTeam(null);
      setTimer(0);
      await remove(ref(database, "buzzerData")); // ✅ Clear buzz
    } else {
      setShowTopicPrompt(true);
      localStorage.setItem("boysScore", boysScore);
      localStorage.setItem("girlsScore", girlsScore);
    }
  };

  const loadNewTopic = (topic) => {
    const newQuestions = [
      `Question 1 about ${topic}`,
      `Question 2 about ${topic}`,
      `Question 3 about ${topic}`,
    ];
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setBuzzerTeam(null);
    setTimer(0);
    setShowTopicPrompt(false);
    remove(ref(database, "buzzerData")); // Clear buzz for fresh round
  };

  return (
    <>
      {showTopicPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <h3 className="text-xl font-bold">Continue with another topic?</h3>
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={() => navigate("/scoreboard")} className="bg-red-600 text-white px-4 py-2 rounded">
                Show Final Score
              </button>
              <button onClick={() => setShowTopicPrompt(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold">Or choose new topic:</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => loadNewTopic(topic)}
                    className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 bg-yellow-50 min-h-screen flex flex-col justify-between">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Quiz Time!</h2>
          <div
            className={`p-4 rounded-xl transition-all duration-300 ${
              buzzerTeam === "boys"
                ? "bg-blue-100 border-4 border-blue-500"
                : buzzerTeam === "girls"
                ? "bg-pink-100 border-4 border-pink-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">
              {questions[currentQuestionIndex]}
            </h2>

            {buzzerTeam && (
              <div className="w-full mt-4">
                <p className="text-lg font-semibold text-center text-red-600">
                  ⏱️ {buzzerTeam.toUpperCase()} buzzed! {timer}s remaining...
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
                  <div
                    className={`h-full transition-[width] duration-1000 ease-linear ${
                      buzzerTeam === "boys" ? "bg-blue-500" : "bg-pink-500"
                    }`}
                    style={{ width: `${(timer / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-around mt-10">
          <TeamScore team="boys" score={boysScore} setScore={setBoysScore} img={boysImg} />
          <TeamScore team="girls" score={girlsScore} setScore={setGirlsScore} img={girlImg} />
        </div>

        <div className="flex justify-between items-center mt-10">
          <button onClick={() => navigate("/scoreboard")} className="text-blue-700 underline">
            View Scoreboard
          </button>

          <button
            disabled={timer > 0}
            onClick={nextQuestion}
            className={`mt-6 px-6 py-3 rounded-xl text-white text-lg transition-all ${
              timer > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

function TeamScore({ team, score, setScore, img }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={img} alt={team} className="w-20 h-20" />
      <p className="text-xl font-semibold">{score}</p>
      <div className="flex gap-2">
        <button onClick={() => setScore(score + 1)} className="bg-green-600 text-white px-4 py-2 rounded">
          +1
        </button>
        <button
          onClick={() => setScore((prev) => Math.max(prev - 1, 0))}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          -1
        </button>
      </div>
    </div>
  );
}
