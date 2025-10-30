import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});


async function main(prompt) {
  try {
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ type: "text", text: prompt }]
    });
    console.log(response.text,"gemini res");
    
    return response.text;
  } catch (err) {
    console.error("GenAI error:", err);
    console.error(err)
    throw err;
  }
}

export default main;