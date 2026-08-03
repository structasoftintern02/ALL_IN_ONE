import React, { useState } from 'react';
import { Send, Bot, CheckCheck, Sparkles, User } from 'lucide-react';

export const ChatBubblePreview = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hi! Can you send me your pricing plans and demo?', time: '10:42 AM' },
    { sender: 'bot', text: 'Hello! 👋 Thanks for reaching out. Here is our pricing breakdown:\n\n• Starter: $29/mo\n• Professional: $79/mo\n• Enterprise: Custom\n\nWould you like me to book a live demo with our team?', time: '10:42 AM', isAi: true }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = { sender: 'user', text: inputVal, time: '10:43 AM' };
    setMessages(prev => [...prev, newMsg]);
    setInputVal('');

    // Simulate AI Instant Reply after 800ms
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: `🤖 GPT-4o AI: Got your message "${newMsg.text}". I have automatically updated your CRM status and notified Agent Sarah!`,
          time: '10:43 AM',
          isAi: true
        }
      ]);
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#E5DDD5] dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 dark:border-gray-800">
      
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-white relative">
            <Bot className="w-5 h-5 text-amber-300" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54] absolute bottom-0 right-0" />
          </div>
          <div>
            <h4 className="font-bold text-sm leading-tight flex items-center gap-1">
              <span>WhatsApp AI Assistant</span>
              <span className="text-[10px] bg-emerald-400 text-slate-950 font-extrabold px-1.5 py-0.2 rounded">
                GPT-4o
              </span>
            </h4>
            <span className="text-[11px] text-emerald-200">Online • 24/7 Auto-Responder</span>
          </div>
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="p-4 space-y-3 h-72 overflow-y-auto bg-[radial-gradient(#075e54_1px,transparent_1px)] [background-size:16px_16px] bg-opacity-5">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-xs space-y-1 shadow-sm ${
              m.sender === 'user' 
                ? 'bg-[#DCF8C6] text-slate-900 rounded-tr-none' 
                : 'bg-white text-slate-900 dark:bg-gray-800 dark:text-white rounded-tl-none border border-slate-200 dark:border-gray-700'
            }`}>
              {m.isAi && (
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Auto-Reply</span>
                </div>
              )}
              <p className="whitespace-pre-line leading-relaxed">{m.text}</p>
              <div className="flex items-center justify-end gap-1 text-[9px] text-slate-400">
                <span>{m.time}</span>
                {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-blue-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-2 bg-slate-100 dark:bg-gray-800 flex items-center gap-2 border-t border-slate-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Type a test message..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 py-2 px-3 bg-white dark:bg-gray-900 rounded-full text-xs text-slate-900 dark:text-white focus:outline-none border border-slate-300 dark:border-gray-700"
        />
        <button
          type="submit"
          className="w-9 h-9 rounded-full bg-[#075E54] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors flex-shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
