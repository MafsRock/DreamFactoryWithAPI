import React from 'react';
import { NavLink } from 'react-router-dom';
import { MoonStar, Users } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-purple-950/5 shadow-lg shadow-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-2 text-purple-200 hover:text-purple-100 transition-colors">
            <MoonStar className="w-6 h-6" />
            <span className="font-semibold">Interpretador de Sonhos</span>
          </NavLink>
          
          <NavLink 
            to="/comunidade" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive 
                  ? 'bg-purple-500/10 text-white backdrop-blur-3xl' 
                  : 'text-purple-200 hover:bg-purple-500/5 hover:backdrop-blur-3xl'
              }`
            }
          >
            <Users className="w-5 h-5" />
            <span>Comunidade</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}