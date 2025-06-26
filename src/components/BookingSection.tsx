import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Users, Phone } from 'lucide-react';

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer un vrai système de réservation
    console.log('Demande de réservation:', { checkIn, checkOut, guests });
    alert('Demande de réservation envoyée ! Sandrine vous contactera rapidement.');
  };

  const tarifs = [
    { periode: "Avril - Mai", prix: "85€", description: "Printemps en montagne" },
    { periode: "Juin - Septembre", prix: "95€", description: "Saison estivale" },
    { periode: "Octobre", prix: "80€", description: "Couleurs d'automne" }
  ];

  return (
    <section id="reservation" className="py-20 bg-sapin text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Réservez votre séjour
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos tarifs transparents et réservez directement 
            pour profiter des meilleurs prix sans commission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="bg-cream backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-sapin flex items-center">
                <Calendar className="mr-3 text-glacier" size={28} />
                Vérifier les disponibilités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-sapin mb-2">
                      Date d'arrivée
                    </label>
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="border-beige-warm focus:border-glacier bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-sapin mb-2">
                      Date de départ
                    </label>
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="border-beige-warm focus:border-glacier bg-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-sapin mb-2">
                    Nombre de personnes
                  </label>
                  <select 
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-3 border border-beige-warm rounded-lg focus:border-glacier focus:outline-none bg-white"
                    required
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-glacier hover:bg-glacier/90 text-white py-4 text-lg"
                >
                  Demander la disponibilité
                </Button>
                
                <p className="text-sm text-slate-gray text-center">
                  Sandrine vous contactera dans les 24h pour confirmer votre réservation
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Pricing & Info */}
          <div className="space-y-8">
            {/* Tarifs */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                Nos tarifs 2025
              </h3>
              <div className="space-y-4">
                {tarifs.map((tarif, index) => (
                  <Card key={index} className="bg-cream border-sapin/20 border shadow-lg">
                    <CardContent className="p-6 flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-lg text-sapin">{tarif.periode}</h4>
                        <p className="text-sapin/80 text-sm">{tarif.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-playfair font-bold text-glacier">
                          {tarif.prix}
                        </span>
                        <p className="text-sm text-sapin/80">par nuit</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Direct */}
            <Card className="bg-cream border-sapin/20 border shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="text-glacier mx-auto mb-4" size={32} />
                <h4 className="font-playfair font-bold text-xl mb-2 text-sapin">
                  Réservation directe
                </h4>
                <p className="text-sapin mb-4">
                  Contactez Sandrine directement pour des conseils personnalisés et les meilleures conditions
                </p>
                <Button 
                  className="w-full bg-cream text-sapin hover:bg-beige-warm hover:text-sapin border-sapin border"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>

            {/* Avantages réservation directe */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-playfair font-semibold text-lg mb-4">
                Avantages de la réservation directe
              </h4>
              <ul className="space-y-2 text-cream/90">
                <li className="flex items-start">
                  <span className="text-glacier mr-2">✓</span>
                  Meilleur prix garanti (pas de commission)
                </li>
                <li className="flex items-start">
                  <span className="text-glacier mr-2">✓</span>
                  Conseils personnalisés de Sandrine
                </li>
                <li className="flex items-start">
                  <span className="text-glacier mr-2">✓</span>
                  Flexibilité sur les conditions
                </li>
                <li className="flex items-start">
                  <span className="text-glacier mr-2">✓</span>
                  Support direct pendant votre séjour
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
