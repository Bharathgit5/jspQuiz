export default function GirlsBuzzer() {
  const channel = new BroadcastChannel("quiz-buzzer");

  const handleBuzz = () => {
    channel.postMessage({ team: "girls" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-50">
      <h1 className="text-3xl font-bold mb-6">Girls Team</h1>
      <button
        onClick={handleBuzz}
        className="bg-pink-600 text-white text-2xl px-8 py-6 rounded-xl"
      >
        BUZZ!
      </button>
    </div>
  );
}
