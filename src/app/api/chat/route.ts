import { GoogleGenerativeAI } from '@google/generative-ai';

import {
  buildAureliaSystemPrompt,
  type ChatMessage,
} from '@/lib/aurelia-knowledge';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY is not configured in environment variables.' },
        { status: 500 },
      );
    }

    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];

    if (messages.length === 0) {
      return Response.json({ error: 'Messages are required.' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.role !== 'user' || !lastMessage.content.trim()) {
      return Response.json(
        { error: 'Last message must be a non-empty user message.' },
        { status: 400 },
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: buildAureliaSystemPrompt(),
    });

    const history = messages.slice(0, -1).map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content.trim());
    const reply = result.response.text();

    return Response.json({ message: reply });
  } catch (error) {
    console.error('Gemini chat error:', error);
    return Response.json(
      { error: 'Failed to get a response from Aurelia. Please try again.' },
      { status: 500 },
    );
  }
}
