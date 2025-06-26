
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer un vrai système d'envoi d'email
    console.log('Message envoyé:', formData);
    alert('Message envoyé ! Sandrine vous répondra rapidement.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sapin mb-6">
            Contactez Sandrine
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Une question ? Besoin de conseils personnalisés ? 
            Sandrine est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-sapin flex items-center">
                <Mail className="mr-3 text-glacier" size={28} />
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sapin mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-beige-warm focus:border-glacier"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sapin mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-beige-warm focus:border-glacier"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sapin mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-beige-warm focus:border-glacier"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sapin mb-2">
                    Votre message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="border-beige-warm focus:border-glacier resize-none"
                    placeholder="Dates souhaitées, questions sur le gîte, demandes spéciales..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-sapin hover:bg-sapin/90 text-cream py-4 text-lg"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Testimonials */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-beige-warm to-cream">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-sapin mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-glacier mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-sapin">Adresse</h4>
                      <p className="text-slate-gray">
                        24 Quartier Condamines<br />
                        06450 Lantosque<br />
                        Vallée de la Vésubie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-glacier mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-sapin">Téléphone</h4>
                      <p className="text-slate-gray">
                        +33 (0)4 XX XX XX XX<br />
                        <span className="text-sm">Disponible tous les jours 9h-20h</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-glacier mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-sapin">Email</h4>
                      <p className="text-slate-gray">
                        contact@gite-sandrine-vesubie.fr<br />
                        <span className="text-sm">Réponse sous 24h garantie</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="border-0 shadow-lg bg-glacier/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-semibold text-sapin mb-6">
                  Ce que disent nos hôtes
                </h3>
                
                <div className="space-y-6">
                  <blockquote className="border-l-4 border-glacier pl-4">
                    <p className="text-slate-gray italic mb-2">
                      "Un accueil chaleureux dans un cadre exceptionnel. 
                      Sandrine nous a donné d'excellents conseils pour découvrir la région."
                    </p>
                    <cite className="text-sm font-medium text-sapin">— Marie & Pierre, Avril 2024</cite>
                  </blockquote>

                  <blockquote className="border-l-4 border-glacier pl-4">
                    <p className="text-slate-gray italic mb-2">
                      "Le gîte allie parfaitement authenticité et confort moderne. 
                      Nos enfants ont adoré l'environnement naturel."
                    </p>
                    <cite className="text-sm font-medium text-sapin">— Famille Dubois, Juillet 2024</cite>
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Access Info */}
            <div className="bg-sapin/5 rounded-xl p-6">
              <h4 className="font-playfair font-semibold text-sapin mb-4">
                Informations d'accès
              </h4>
              <ul className="space-y-2 text-slate-gray text-sm">
                <li>• Parking privé gratuit</li>
                <li>• Accès voiture obligatoire</li>
                <li>• Gare la plus proche : Saint-Martin-Vésubie (20 min)</li>
                <li>• Aéroport Nice Côte d'Azur (1h15)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
