import React, { useState } from 'react';
import { MoonStar } from 'lucide-react';
import { DreamForm } from '../components/DreamForm';
import { Interpretation } from '../components/Interpretation';
import { Dream } from '../types/dream';

export function HomePage() {
  const [currentDream, setCurrentDream] = useState<Dream | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-purple-800/20 rounded-full"></div>
          <MoonStar className="relative w-16 h-16 text-purple-200 mb-4" />
        </div>
        <h1 className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 mb-4">
          Interpretação de Sonhos
        </h1>
        <p className="text-purple-100 max-w-md text-lg italic">
          Descubra os mistérios e significados ocultos em seus sonhos através de nossa análise profunda
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <DreamForm onInterpret={setCurrentDream} />
        <Interpretation dream={currentDream} />
      </div>
    </div>
  );
}