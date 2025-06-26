
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2048&q=80)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          {/* Badge 3 étoiles */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-300 text-lg">★★★</span>
            <span className="text-sm font-medium">Gîte Classé 3 Étoiles</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Gîte de Sandrine
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-8 text-xl">
            <MapPin className="text-glacier" size={24} />
            <span className="font-medium">Vallée de la Vésubie</span>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-cream/90">
            Découvrez l'authenticité montagnarde dans un cadre exceptionnel. 
            Votre refuge de charme au cœur des Alpes-Maritimes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToReservation}
              size="lg" 
              className="bg-glacier hover:bg-glacier/90 text-white text-lg px-8 py-4 h-auto"
            >
              Vérifier les disponibilités
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sapin text-lg px-8 py-4 h-auto bg-transparent"
              onClick={() => document.getElementById('gite')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir le gîte
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
