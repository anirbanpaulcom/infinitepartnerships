'use client';
import { MessageSquareIcon, Send, X } from 'lucide-react';
import { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newMessages = [
        ...messages,
        { text: userMessage, sender: 'user' },
        { text: "I'm here to help! What can I do for you?", sender: 'bot' },
      ];
      setMessages(newMessages);
      setUserMessage('');
    }
  };

  return (
    <>
      <button
        className="fixed flex justify-center items-center gap-2 bottom-10 right-10 p-3 px-8 bg-blue-600 text-white rounded-2xl z-40  text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquareIcon /> Lets Chat!
      </button>

      {isOpen && (
        <section className="fixed bottom-10 right-10 w-80 h-[450px] bg-gray-950 rounded-lg shadow-lg z-50">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-t-lg">
              <div className="text-white text-sm">
                INFINITE PARTNERSHIPS <br /> We’ll reply as soon as we can
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 mb-3 p-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'bot'
                      ? 'bg-gray-200 text-gray-700'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className=" absolute right-2 bg-blue-500 text-black p-3 rounded-md"
              >
                <Send />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatBot;
