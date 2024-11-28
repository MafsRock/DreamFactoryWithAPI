import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { CommunityDreams } from '../components/CommunityDreams';
import { getDreams } from '../utils/storage';
import { Dream } from '../types/dream';

export function CommunityPage() {
  const [communityDreams, setCommunityDreams] = useState<Dream[]>([]);

  useEffect(() => {
    const updateDreams = () => {
      setCommunityDreams(getDreams());
    };

    updateDreams();
    const interval = setInterval(updateDreams, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-purple-500/20 rounded-full"></div>
          <Users className="relative w-16 h-16 text-purple-400 mb-4" />
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
          Sonhos da Comunidade
        </h1>
        <p className="text-purple-300 max-w-md">
          Explore os sonhos compartilhados nas últimas 24 horas
        </p>
      </div>

      <div className="flex justify-center">
        <CommunityDreams dreams={communityDreams} />
      </div>
    </div>
  );
}