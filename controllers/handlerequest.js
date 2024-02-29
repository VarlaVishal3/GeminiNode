const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const config = new GoogleGenerativeAI(apiKey);
const modelId = "gemini-pro";
const model = config.getGenerativeModel({ model: modelId });

const handleGenerateRequest = async (req, res) => {

  try {
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({ response: result});
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating content.");
  }
};

module.exports = {handleGenerateRequest};