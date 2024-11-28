import React from 'react';
import { Users, Clock } from 'lucide-react';
import { Dream } from '../types/dream';

export function CommunityDreams({ dreams }: { dreams: Dream[] }) {
  return (
    <div className="w-full max-w-lg backdrop-blur-lg bg-purple-900/30 p-6 rounded-xl border border-purple-500/50">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-purple-300">Sonhos da Comunidade</h2>
      </div>
      
      {dreams.length === 0 ? (
        <p className="text-purple-300 text-center">Nenhum sonho compartilhado nas últimas 24 horas</p>
      ) : (
        <div className="space-y-4">
          {dreams.map(dream => (
            <div key={dream.id} className="p-4 rounded-lg bg-purple-900/50 border border-purple-500/30">
              <div className="flex items-center justify-between mb-2">
                <p className="text-purple-300 font-medium">{dream.name}</p>
                <div className="flex items-center text-purple-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(dream.timestamp).toLocaleTimeString()}
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">{dream.content}</p>
              <p className="text-sm text-purple-200 italic">{dream.interpretation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}