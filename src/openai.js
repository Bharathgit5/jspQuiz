import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;


export async function generateQuestion(topic) {
  const prompt = `Generate a single riddle-style quiz question related to ${topic}.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // or gpt-4 if you have access
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const question = response.data.choices[0].message.content;
    return question.trim();
  } catch (error) {
    console.error("Error fetching question from OpenAI:", error);
    return "Failed to generate question.";
  }
}
