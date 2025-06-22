const aiService = require("../services/ai.services");
const { validateCodeReview } = require("../middleware/validation");

module.exports.getResponse = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }
        
        // Add user context to the AI request
        const userContext = req.user ? `User: ${req.user.name} (${req.user.email})` : 'Anonymous user';
        const enhancedPrompt = `${userContext}\n\nPlease review the following code:\n\n${code}`;
        
        const response = await aiService(enhancedPrompt);

        res.json({
            success: true,
            review: response,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('AI Review error:', error);
        res.status(500).json({ 
            error: "An error occurred while processing your code review" 
        });
    }
};