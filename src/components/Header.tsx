
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-beige-warm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sapin rounded-full flex items-center justify-center">
              <span className="text-cream text-sm font-bold">★★★</span>
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-sapin">Gîte de Sandrine</h1>
              <p className="text-xs text-slate-gray">Vallée de la Vésubie</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-sapin hover:text-glacier transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('gite')}
              className="text-sapin hover:text-glacier transition-colors font-medium"
            >
              Le Gîte
            </button>
            <button 
              onClick={() => scrollToSection('localisation')}
              className="text-sapin hover:text-glacier transition-colors font-medium"
            >
              Localisation
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-sapin hover:text-glacier transition-colors font-medium"
            >
              Réservation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sapin hover:text-glacier transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-sapin hover:bg-sapin/90 text-cream"
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-sapin hover:text-glacier transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-beige-warm">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-sapin hover:text-glacier transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('gite')}
                className="text-left text-sapin hover:text-glacier transition-colors font-medium"
              >
                Le Gîte
              </button>
              <button 
                onClick={() => scrollToSection('localisation')}
                className="text-left text-sapin hover:text-glacier transition-colors font-medium"
              >
                Localisation
              </button>
              <button 
                onClick={() => scrollToSection('reservation')}
                className="text-left text-sapin hover:text-glacier transition-colors font-medium"
              >
                Réservation
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-sapin hover:text-glacier transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('reservation')}
                className="bg-sapin hover:bg-sapin/90 text-cream w-full mt-4"
              >
                Réserver
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
