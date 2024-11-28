import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CommunityPage } from './pages/CommunityPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-radial from-black via-purple-950/20 to-black text-white">
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comunidade" element={<CommunityPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;