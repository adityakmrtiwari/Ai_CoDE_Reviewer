const aiService = require("../services/ai.services");
const { validateCodeReview } = require("../middleware/validation");

module.exports.getResponse = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    // Prompt Gemini to first find errors, then review
    const prompt = `First, analyze the following code and list any errors (syntax, runtime, or logic). If there are no errors, say 'No errors found.' Then, provide a detailed review and suggestions for improvement.\n\nCode:\n\n${code}`;

    const response = await aiService(prompt);

    // Try to split errors and review if possible
    // (Gemini will likely output errors first, then review)
    res.json({
      success: true,
      result: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("AI Review error:", error);
    res.status(500).json({
      error: "An error occurred while processing your code review",
    });
  }
};
