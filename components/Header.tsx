
import React from 'react';
import { Menu, ArrowRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">SG</div>
          <span className="serif font-bold text-xl tracking-tight">생동력연구소</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-clay-accent transition-colors">프로그램</a>
          <a href="#" className="text-sm font-medium hover:text-clay-accent transition-colors">철학</a>
          <a href="#" className="text-sm font-medium hover:text-clay-accent transition-colors">커뮤니티</a>
          <a href="#" className="text-sm font-medium hover:text-clay-accent transition-colors">연구결과</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-clay-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-sm">
            상담 시작하기 <ArrowRight size={16} />
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
