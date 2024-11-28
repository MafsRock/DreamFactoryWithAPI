import React, { useState } from 'react';
import { Moon, Stars, Send } from 'lucide-react';
import { getDreamInterpretation } from '../utils/api';
import { saveDream } from '../utils/storage';
import { Dream } from '../types/dream';

export function DreamForm({ onInterpret }: { onInterpret: (dream: Dream) => void }) {
  const [name, setName] = useState('');
  const [dream, setDream] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dream.trim() || !name.trim() || loading) return;
    
    setLoading(true);
    try {
      const response = await getDreamInterpretation(name, dream);
      const newDream: Dream = {
        id: Date.now().toString(),
        name: response.name,
        content: response.dream,
        interpretation: response.interpretation,
        timestamp: response.timestamp || Date.now(),
      };
      
      saveDream(newDream);
      onInterpret(newDream);
      setDream('');
    } catch (error) {
      console.error('Failed to interpret dream:', error);
      // You might want to show an error message to the user here
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg backdrop-blur-xl bg-black/40 p-8 rounded-xl border border-purple-900/50">
      <div className="flex items-center gap-2 mb-8">
        <Moon className="w-6 h-6 text-purple-200" />
        <Stars className="w-6 h-6 text-purple-200" />
        <h2 className="text-2xl font-normal text-purple-100">Revele seu Sonho</h2>
      </div>
      
      <div className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/50 text-white placeholder-purple-300/50 border border-purple-900/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Seu nome..."
          required
          disabled={loading}
        />
      </div>

      <div className="relative">
        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-40 p-4 rounded-lg bg-black/50 text-white placeholder-purple-300/50 border border-purple-900/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          placeholder="Descreva seu sonho em detalhes... (Pressione Enter para enviar)"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`absolute bottom-4 right-4 p-2 rounded-full ${
            loading 
              ? 'bg-purple-800/40 cursor-not-allowed' 
              : 'bg-purple-800/80 hover:bg-purple-700 transition-colors'
          }`}
          disabled={loading}
        >
          <Send className={`w-5 h-5 text-white ${loading ? 'opacity-50' : ''}`} />
        </button>
      </div>
    </form>
  );
}