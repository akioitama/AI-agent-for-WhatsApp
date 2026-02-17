const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function listModels() {
    console.log("Listing available models...");
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Accessing the model manager directly if possible, or using a workaround
        // The SDK doesn't have a direct 'listModels' on the main class in some versions, 
        // but let's try to infer from a simple generation error or checking docs.
        // Actually, for v1beta, we can use the API url directly with fetch if SDK doesn't expose it easily
        // But let's try a different approach: just try a very basic model like 'embedding-001' or just print the error fully.

        // Wait, the error message said: "Call ListModels to see the list of available models"
        // The Node.js SDK v0.1.3+ has strict model names.

        // Let's try to use the `getGenerativeModel` with a non-existent model to force a list? No.
        // The error message from previous run was: "[404 Not Found] ... Call ListModels"

        // Let's try to use `gemini-1.0-pro` explicitly if `gemini-pro` is an alias that's not working.

        /* 
           Since I cannot easily list models with the *basic* SDK usage without digging into the response objects which might be hidden,
           I will try to make a raw REST call to the API using the key to see the models. 
        */

        const apiKey = process.env.GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name}`);
                }
            });
        } else {
            console.log("No models returned or error:", JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
