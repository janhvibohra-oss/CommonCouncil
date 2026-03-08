import React, { useState } from 'react';

export default function AIAssistant({ userProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hi! Ask me about grants, documents, regulations, or compliance deadlines.' }
  ]);

  const generateSystemPrompt = () => {
    return `You are the CommonCounsel AI Legal Advisor for Canadian small businesses. 
    The user is ${userProfile?.name || 'an entrepreneur'} in ${userProfile?.province || 'Canada'}.
    Always cite official Canadian government websites. You are NOT a law firm.`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newHistory = [...chatHistory, { role: 'user', content: input }];
    setChatHistory(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_ANTHROPIC_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true' // Note: Best practice is routing this via a backend
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20240620',
          max_tokens: 800,
          system: generateSystemPrompt(),
          messages: newHistory
        })
      });

      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      
      setChatHistory([...newHistory, { role: 'assistant', content: data.content[0].text }]);
    } catch (err) {
      setChatHistory([...newHistory, { role: 'assistant', content: 'The AI advisor is offline right now. Try again later!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="ai-toggle" onClick={() => setIsOpen(!isOpen)}>🤖</button>
      
      <div className={`ai-sidebar ${!isOpen ? 'hidden' : ''}`}>
        <div className="ai-sidebar-head">
          <h3>🤖 CommonCounsel AI</h3>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        
        <div className="ai-sidebar-msgs">
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`ai-msg ${msg.role}`}>
              <div className="txt">{msg.content}</div>
            </div>
          ))}
          {isLoading && <div className="ai-msg loading"><div className="txt">Typing...</div></div>}
        </div>
        
        <div className="ai-sidebar-input">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your question..." 
          />
          <button onClick={handleSend} disabled={isLoading}>Send</button>
        </div>
      </div>
    </>
  );
}

