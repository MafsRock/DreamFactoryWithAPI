import React from 'react';
import { Sparkles } from 'lucide-react';
import { Dream } from '../types/dream';
import { ShareButtons } from './ShareButtons';

export function Interpretation({ dream }: { dream: Dream | null }) {
  if (!dream) return null;

  return (
    <div className="w-full max-w-lg p-8 backdrop-blur-xl bg-black/40 rounded-xl border border-purple-900/50">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-purple-200" />
        <h2 className="text-2xl font-normal text-purple-100">Revelação Mística</h2>
      </div>
      <p className="text-sm text-purple-200 mb-4 italic">Interpretado para: {dream.name}</p>
      <p className="text-gray-100 leading-relaxed text-lg">{dream.interpretation}</p>
      <ShareButtons dream={dream} />
    </div>
  );
}