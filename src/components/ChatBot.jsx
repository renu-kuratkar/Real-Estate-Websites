import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot response after 1s delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Thank you for your query! We will get back to you shortly." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon */}
      <motion.button
        className="bg-red-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          className="w-80 h-96 bg-white rounded-lg shadow-xl fixed bottom-16 right-4 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-red-900 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Chat with Zaminwala</h3>
            <button onClick={toggleChat} className="text-white">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`p-3 rounded-lg text-white max-w-xs ${
                    msg.sender === "user" ? "bg-blue-200" : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-red-900 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
