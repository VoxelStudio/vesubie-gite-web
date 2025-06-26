
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  const activities = [
    {
      category: "Randonnées",
      items: ["Sentiers balisés", "Cascades du Saut du Diable", "Col de Turini", "GR5"]
    },
    {
      category: "Patrimoine",
      items: ["Village de Lantosque", "Architecture traditionnelle", "Chapelles rurales", "Moulins anciens"]
    },
    {
      category: "Nature",
      items: ["Parc du Mercantour", "Faune sauvage", "Flore alpine", "Sites géologiques"]
    },
    {
      category: "Activités",
      items: ["Canyoning", "VTT", "Pêche en rivière", "Photographie nature"]
    }
  ];

  return (
    <section id="localisation" className="py-20 bg-gradient-to-b from-cream to-beige-warm/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sapin mb-6">
            Au cœur des Alpes-Maritimes
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez un territoire d'exception où nature préservée, patrimoine authentique 
            et activités de plein air se conjuguent pour des vacances inoubliables.
          </p>
        </div>

        {/* Location Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map placeholder */}
          <div className="relative">
            <div className="bg-glacier/10 rounded-2xl p-8 text-center border-2 border-dashed border-glacier/30">
              <MapPin className="text-glacier mx-auto mb-4" size={48} />
              <h3 className="text-xl font-playfair font-semibold text-sapin mb-2">
                24 Quartier Condamines
              </h3>
              <p className="text-slate-gray mb-4">Lantosque, Vallée de la Vésubie</p>
              <p className="text-sm text-slate-gray">
                Carte interactive disponible lors de la réservation
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-sapin mb-4">
                Une situation privilégiée
              </h3>
              <p className="text-slate-gray leading-relaxed mb-6">
                Notre gîte est idéalement situé dans la vallée de la Vésubie, 
                porte d'entrée du Parc National du Mercantour. Un emplacement 
                stratégique pour rayonner dans toute la région.
              </p>
            </div>

            {/* Distance Information */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-xl">
                <h4 className="font-semibold text-sapin mb-1">Nice</h4>
                <p className="text-sm text-slate-gray">1h15 en voiture</p>
              </div>
              <div className="bg-white/80 p-4 rounded-xl">
                <h4 className="font-semibold text-sapin mb-1">Monaco</h4>
                <p className="text-sm text-slate-gray">1h30 en voiture</p>
              </div>
              <div className="bg-white/80 p-4 rounded-xl">
                <h4 className="font-semibold text-sapin mb-1">Saint-Martin-Vésubie</h4>
                <p className="text-sm text-slate-gray">20 min en voiture</p>
              </div>
              <div className="bg-white/80 p-4 rounded-xl">
                <h4 className="font-semibold text-sapin mb-1">Col de Turini</h4>
                <p className="text-sm text-slate-gray">45 min en voiture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div>
          <h3 className="text-3xl font-playfair font-semibold text-sapin text-center mb-12">
            Activités à proximité
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="font-playfair font-semibold text-sapin mb-4 text-lg">
                    {activity.category}
                  </h4>
                  <ul className="space-y-2">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-gray text-sm flex items-start">
                        <span className="text-glacier mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
