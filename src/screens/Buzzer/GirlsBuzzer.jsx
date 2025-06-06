
export default function GirlsBuzzer() {
  const handleBuzz = () => {
    localStorage.setItem("buzzerData", JSON.stringify({
      team: "boys",
      time: new Date().getTime(), // Force update even if same team
    }));
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Girls Buzzer</h1>
      <button
        onClick={handleBuzz}
        className="bg-pink-600 text-white px-10 py-4 rounded-xl text-2xl"
      >
        BUZZ!
      </button>
    </div>
  );
}
