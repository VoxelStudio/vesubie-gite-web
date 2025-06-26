
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sapin text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Gîte Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-glacier rounded-full flex items-center justify-center">
                <span className="text-cream text-sm font-bold">★★★</span>
              </div>
              <h3 className="text-xl font-playfair font-bold">Gîte de Sandrine</h3>
            </div>
            <p className="text-cream/80 mb-4 leading-relaxed">
              Votre refuge de charme au cœur de la vallée de la Vésubie. 
              Authenticité montagnarde et confort moderne pour des séjours inoubliables.
            </p>
            <div className="flex items-center space-x-2 text-cream/80">
              <span className="text-yellow-300">★★★</span>
              <span className="text-sm">Gîte Classé 3 Étoiles</span>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-glacier" size={16} />
                <span className="text-cream/80 text-sm">
                  24 Quartier Condamines, Lantosque
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-glacier" size={16} />
                <span className="text-cream/80 text-sm">
                  +33 (0)4 XX XX XX XX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-glacier" size={16} />
                <span className="text-cream/80 text-sm">
                  contact@gite-sandrine-vesubie.fr
                </span>
              </div>
            </div>
          </div>

          {/* Informations légales */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Informations</h4>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>• Ouverture : Avril à Octobre</li>
              <li>• Capacité : Familles et couples</li>
              <li>• Classification : 3★ officielle</li>
              <li>• Réservation sans commission</li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-cream/20">
              <p className="text-cream/60 text-xs">
                © 2024 Gîte de Sandrine - Tous droits réservés<br />
                Vallée de la Vésubie, Alpes-Maritimes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
