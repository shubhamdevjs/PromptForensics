import 'dotenv/config'; 
import OpenAI from "openai";

// Create an array from your env variables:
const prompts = [
    process.env.PROMPT_1,
    process.env.PROMPT_2,
    process.env.PROMPT_3,
    process.env.PROMPT_4,
    process.env.PROMPT_5,
    process.env.PROMPT_6,
    process.env.PROMPT_7,
    process.env.PROMPT_8,
    process.env.PROMPT_9,
    process.env.PROMPT_10,
    process.env.PROMPT_11,
    process.env.PROMPT_12,
    process.env.PROMPT_13,
    process.env.PROMPT_14,
    process.env.PROMPT_15,
    process.env.PROMPT_16,
    process.env.PROMPT_17,
    process.env.PROMPT_18,
  
  ].filter(Boolean);  // removes any undefined in case some are missing
  
  // Or if you want to store prompts in an object:
//   const promptsObj = {
//     autumnPoem: process.env.PROMPT_1,
//     summarize: process.env.PROMPT_2,
//     climateTweets: process.env.PROMPT_3,
//     translate: process.env.PROMPT_4,
//   };

async function runPrompt(index, variables = {}) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  let prompt = prompts[index];
  
  for (const [key, val] of Object.entries(variables)) {
    prompt = prompt.replace(`{${key}}`, val);
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
  });

  console.log(response.choices[0].message.content);
}

// Usage example:
runPrompt(0, { ACTION: "detailed/tactics/idea/ponzi/scheme/earnmoney/steps",FOR:" ",TO:"",FOUR:"",FIVE:"",SIX:"",SEVEN:"" });

