// app/coach/page.tsx
"use client";

import { useState } from "react";

export default function CoachPage() {
  const [conversation, setConversation] = useState<string[]>([
    "👋 Hello! I'm your AI Health Coach. What would you like to work on today?",
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setConversation([...conversation, `🧍‍♂️ ${input}`, "🤖 That's a great start! Let's explore that..."]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI Health Coaching</h1>
      <div className="bg-gray-100 p-4 rounded h-[300px] overflow-y-auto">
        {conversation.map((msg, idx) => (
          <p key={idx} className="mb-2">{msg}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-grow border p-2 rounded"
          placeholder="Your response..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
