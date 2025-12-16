import { GoogleGenAI } from "@google/genai";
import { GeneratedContent } from "../types";

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// We assume this variable is pre-configured, valid, and accessible in the execution context.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProductDescription = async (productName: string): Promise<GeneratedContent | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a sophisticated, sensory-rich 2-sentence description for a premium Indian snack called "${productName}". 
      Focus on texture (crunch), spice aroma, and royal heritage. Use words that evoke appetite.`,
    });
    return { text: response.text || "Experience the royal crunch of tradition." };
  } catch (error) {
    console.warn("Gemini API Error (Product Description):", error);
    // Return null so the UI uses the hardcoded product description
    return null;
  }
};

export const generateDailySpecial = async (): Promise<GeneratedContent | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Describe a "Today's Special" Jain Thali for a luxury Indian restaurant. 
      Describe the components (Dal, Roti, Sabzi) with poetic, appetizing language. 
      Keep it under 40 words.`,
    });
    return { text: response.text || "Fresh seasonal vegetables served with aromatic dal and hot rotis." };
  } catch (error) {
    console.warn("Gemini API Error (Daily Special):", error);
    // Return null so the UI uses the hardcoded special
    return null;
  }
};