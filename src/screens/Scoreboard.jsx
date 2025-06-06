import { useNavigate } from "react-router-dom";
import boysImg from "../assets/boysImg.webp";
import girlImg from "../assets/girlImg.avif";
export default function Scoreboard() {
  const navigate = useNavigate();

  const boysScore = parseInt(localStorage.getItem("boysScore") || "0");
  const girlsScore = parseInt(localStorage.getItem("girlsScore") || "0");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <h1 className="text-3xl font-bold mb-8">Final Scoreboard</h1>

      <div className="flex gap-12 mb-8">
        <div className="flex flex-col items-center gap-2">
          <img src={boysImg} alt="Boys" className="w-20 h-20" />
          <p className="text-2xl font-bold">Boys</p>
          <p className="text-3xl text-green-700 font-bold">{boysScore}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={girlImg} alt="Girls" className="w-20 h-20" />
          <p className="text-2xl font-bold">Girls</p>
          <p className="text-3xl text-pink-700 font-bold">{girlsScore}</p>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Back to Home
      </button>
    </div>
  );
}
