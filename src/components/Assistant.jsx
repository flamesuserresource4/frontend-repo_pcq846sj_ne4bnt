import React, { useState } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your onboarding guide. Ask me anything about our organization, policies, or tools.' },
  ]);
  const [input, setInput] = useState('');

  const onSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    // Mock assistant echo for this static demo
    const botMsg = { role: 'assistant', content: `Thanks for your question about: “${input.trim()}”. Our onboarding covers tutorials, policies, and access. A team member will follow up if needed.` };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
        >
          <MessageCircle className="h-4 w-4" /> Ask our AI
        </button>
      )}

      {open && (
        <div className="flex w-[88vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-200/60 px-4 py-3 dark:border-slate-800">
            <div className="text-sm font-semibold">AI Onboarding Assistant</div>
            <button onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-72 min-h-[14rem] space-y-3 overflow-auto p-4">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-slate-800 dark:text-slate-100' : 'text-slate-700 dark:text-slate-200'}>
                <div className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-slate-100 dark:bg-slate-800' : 'bg-slate-900 text-white'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSend} className="flex items-center gap-2 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about benefits, apps, policies..."
              className="flex-1 rounded-lg border border-slate-200/60 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-white hover:bg-slate-800">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
