import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#800020]/80 backdrop-blur-md shadow-lg' 
          : 'bg-[#800020] shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#800020] font-bold text-sm">P</span>
            </div>
            <h1 className="text-white font-bold text-lg md:text-xl">
              Pizzaria Mãe & Filho
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('pizzas-salgadas')}
              className="text-white hover:text-yellow-300 transition-colors duration-200"
            >
              Pizzas Salgadas
            </button>
            <button 
              onClick={() => scrollToSection('pizzas-doces')}
              className="text-white hover:text-yellow-300 transition-colors duration-200"
            >
              Pizzas Doces
            </button>
            <button 
              onClick={() => scrollToSection('bebidas')}
              className="text-white hover:text-yellow-300 transition-colors duration-200"
            >
              Bebidas
            </button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartOpen}
              className="relative text-white hover:text-yellow-300 transition-colors duration-200"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#800020] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-yellow-300 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#800020]/95 backdrop-blur-md border-t border-white/20">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('pizzas-salgadas')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-left"
              >
                Pizzas Salgadas
              </button>
              <button 
                onClick={() => scrollToSection('pizzas-doces')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-left"
              >
                Pizzas Doces
              </button>
              <button 
                onClick={() => scrollToSection('bebidas')}
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-left"
              >
                Bebidas
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};