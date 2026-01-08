"use client";
import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [greeted, setGreeted] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll chat to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add greeting when chat opens first time
  useEffect(() => {
    if (open && !greeted) {
      setMessages([{ sender: "bot", text: "Hi 👋 How can I help you?" }]);
      setGreeted(true);
    }
  }, [open, greeted]);

  // Send message function
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_msg: userInput }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, there was an error. Please try again." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button + Tooltip */}
      <div className="fixed bottom-5 right-5 flex flex-col items-end gap-2">
        {!open && !greeted && (
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-xl shadow-2xl text-sm transition-all duration-500 animate-bounce">
            Hi 👋 How can I help you?
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-4 rounded-full shadow-2xl
                     hover:shadow-[0_0_25px_rgba(0,203,177,0.7)] transition-all duration-300 transform hover:scale-110"
        >
          <div className="h-8 w-8 flex items-center justify-center text-3xl rounded-full shadow-lg">
            🤖
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-120 bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-3 flex justify-between items-center">
            <span className="font-medium">Chat Support</span>
            <button
              className="hover:text-gray-200 text-xl"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50 flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] p-3 rounded-2xl text-sm break-words ${
                  msg.sender === "user"
                    ? "ml-auto bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-md"
                    : "mr-auto bg-gray-200 text-gray-800 shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-gray-50 flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              className="flex-1 border border-gray-300 rounded-2xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-br from-green-400 to-teal-500 text-white px-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
