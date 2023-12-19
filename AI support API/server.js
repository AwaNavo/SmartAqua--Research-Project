import express from "express";
import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";

const app = express();

// Set up the OpenAI API client
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// Define a route for receiving user input and returning responses
app.post("/chat", async (req, res) => {
  const input = req.body.input;

  try {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Error from OpenAI:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
