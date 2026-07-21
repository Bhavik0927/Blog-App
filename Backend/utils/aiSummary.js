import Groq from 'groq-sdk';
import dotenv from 'dotenv';

const groq = new Groq({ apiKey: process.env.GROQ_API });


async function generateSummary(blogContent){

    const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages:[
            {
                role:"system",
                content: "You summarize blog posts into 2-3 concise, engaging sentences. Output only the summary, no preamble."
            },
            {
                role: 'user',
                content: `Summerize this blog post:\n\n${blogContent.slice(0,6000)}`
            }           
        ],

        max_completion_tokens: 150,
        temperature: 0.5
    });

    return response.choices[0].message.content.trim();
}

module.exports = {generateSummary};