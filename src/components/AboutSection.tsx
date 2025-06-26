
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Capacité idéale",
      description: "Parfait pour les familles et couples recherchant authenticité et confort"
    },
    {
      icon: MapPin,
      title: "Emplacement privilégié",
      description: "24 Quartier Condamines, au cœur de la vallée de la Vésubie"
    },
    {
      icon: Calendar,
      title: "Saison d'ouverture",
      description: "Disponible d'avril à octobre pour profiter des beaux jours"
    }
  ];

  return (
    <section id="gite" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-beige-warm rounded-full px-6 py-2 mb-6">
            <span className="text-sapin text-lg">★★★</span>
            <span className="text-sapin font-medium">Gîte Classé</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sapin mb-6">
            Votre refuge montagnard
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Dans un cadre authentique et préservé, découvrez un hébergement de charme 
            qui allie tradition montagnarde et confort moderne.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="public\images\104412078_3573516486009432_4953368956066748775_n.avif"
                alt="Intérieur du gîte - Salon chaleureux"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80"
                  alt="Vue panoramique montagne"
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
                  alt="Nature environnante"
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-sapin mb-4">
                Authenticité et confort réunis
              </h3>
              <p className="text-slate-gray leading-relaxed mb-6">
                Notre gîte 3★ vous offre un cadre exceptionnel dans la vallée de la Vésubie. 
                Alliant charme traditionnel et équipements modernes, c'est le point de départ 
                idéal pour vos découvertes et aventures en montagne.
              </p>
              <p className="text-slate-gray leading-relaxed">
                Que vous soyez en famille ou en couple, vous trouverez ici l'atmosphère 
                chaleureuse et authentique qui rendra votre séjour inoubliable.
              </p>
            </div>

            {/* Features List */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-beige-warm/50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-sapin rounded-lg flex items-center justify-center">
                    <feature.icon className="text-cream" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sapin mb-1">{feature.title}</h4>
                    <p className="text-slate-gray text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-glacier/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-playfair font-semibold text-sapin mb-2">Vue montagne</h3>
              <p className="text-slate-gray text-sm">
                Réveillez-vous face aux sommets majestueux de la vallée de la Vésubie
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-glacier/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-playfair font-semibold text-sapin mb-2">Nature préservée</h3>
              <p className="text-slate-gray text-sm">
                Immersion totale dans un environnement naturel préservé et authentique
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-glacier/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-playfair font-semibold text-sapin mb-2">Label 3★</h3>
              <p className="text-slate-gray text-sm">
                Qualité et confort garantis par notre classification officielle
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
