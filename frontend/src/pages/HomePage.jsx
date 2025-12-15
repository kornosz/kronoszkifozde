import React, { useState, useEffect } from 'react';
import { Menu, Facebook, MapPin, ChefHat, Sparkles, GlassWater, Utensils, Salad, Cake, Wine } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { menuData, aboutData, galleryImages } from '../mock';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const MenuCategory = ({ title, items, icon: Icon }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-8 h-8 text-amber-400" />
        <h3 className="text-3xl font-serif text-amber-300">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="bg-slate-900/50 border-amber-900/30 hover:border-amber-600/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-100 text-xl font-serif flex justify-between items-start">
                <span>{item.name}</span>
                <span className="text-amber-400 text-2xl font-bold">{item.price} Ft</span>
              </CardTitle>
              <CardDescription className="text-slate-400 text-sm italic">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-amber-900/20' : 'bg-transparent'}`}>
        <div className="greek-border-top"></div>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-amber-400" />
              <h1 className="text-2xl font-serif text-amber-300 tracking-wide">Kronosz Kifőzde</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`hover:text-amber-400 transition-colors ${activeSection === 'home' ? 'text-amber-400' : 'text-slate-300'}`}>Főoldal</button>
              <button onClick={() => scrollToSection('about')} className={`hover:text-amber-400 transition-colors ${activeSection === 'about' ? 'text-amber-400' : 'text-slate-300'}`}>Rólunk</button>
              <button onClick={() => scrollToSection('menu')} className={`hover:text-amber-400 transition-colors ${activeSection === 'menu' ? 'text-amber-400' : 'text-slate-300'}`}>Menü</button>
              <button onClick={() => scrollToSection('gallery')} className={`hover:text-amber-400 transition-colors ${activeSection === 'gallery' ? 'text-amber-400' : 'text-slate-300'}`}>Galéria</button>
              <button onClick={() => scrollToSection('contact')} className={`hover:text-amber-400 transition-colors ${activeSection === 'contact' ? 'text-amber-400' : 'text-slate-300'}`}>Kapcsolat</button>
            </div>
          </div>
        </nav>
        <div className="greek-border-bottom"></div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="greek-pattern"></div>
        </div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1600" 
            alt="Greek temple" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Sparkles className="w-20 h-20 text-amber-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-amber-300 mb-6 tracking-wider drop-shadow-2xl">
            Kronosz Kifőzde
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 mb-8 font-light italic">
            Isteni ízek, mitológiai élmények
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Lépj be a mitológia világába, ahol minden étel egy történetet mesél el az istenek asztaláról
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('menu')} 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg shadow-amber-900/50"
            >
              <Menu className="mr-2 w-5 h-5" />
              Fedezd Fel A Menüt
            </Button>
            <Button 
              onClick={() => scrollToSection('about')} 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Rólunk
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="greek-pattern"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-5xl font-serif text-amber-300 mb-4">Rólunk</h2>
            <Separator className="w-32 mx-auto bg-amber-600/50" />
          </div>
          
          <Card className="bg-slate-900/70 border-amber-900/30 backdrop-blur-sm p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-amber-200 text-center mb-4">
                {aboutData.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-lg leading-relaxed text-center mb-8">
                {aboutData.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-3 text-amber-400">
                  <MapPin className="w-6 h-6" />
                  <span className="text-slate-200">{aboutData.address}</span>
                </div>
                <a 
                  href={aboutData.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="text-slate-200">Kövess Minket!</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-slate-950/50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="greek-pattern"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Menu className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-5xl font-serif text-amber-300 mb-4">Napi Ajánlatunk</h2>
            <Separator className="w-32 mx-auto bg-amber-600/50 mb-6" />
            <p className="text-slate-400 text-lg italic">Az istenek kedvenc fogásai</p>
          </div>

          <MenuCategory title="Főételek" items={menuData.mainDishes} icon={Utensils} />
          <MenuCategory title="Street Food / Gyors Fogások" items={menuData.streetFood} icon={ChefHat} />
          <MenuCategory title="Saláták & Könnyed Fogások" items={menuData.salads} icon={Salad} />
          <MenuCategory title="Desszertek" items={menuData.desserts} icon={Cake} />
          <MenuCategory title="Italok" items={menuData.drinks} icon={GlassWater} />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="greek-pattern"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-5xl font-serif text-amber-300 mb-4">Galéria</h2>
            <Separator className="w-32 mx-auto bg-amber-600/50" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg aspect-square group">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-amber-300 font-serif text-lg">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-slate-950 py-16 px-6 border-t border-amber-900/30 relative">
        <div className="greek-border-top"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">Kronosz Kifőzde</h3>
              <p className="text-slate-400 leading-relaxed">
                Ahol az istenek egy asztalhoz ülnek
              </p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-amber-300 mb-4">Elérhetőség</h4>
              <div className="flex items-start gap-3 text-slate-400 mb-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span>{aboutData.address}</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-serif text-amber-300 mb-4">Kövess Minket</h4>
              <a 
                href={aboutData.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
          <Separator className="bg-amber-900/30 mb-8" />
          <div className="text-center text-slate-500">
            <p>&copy; 2025 Kronosz Kifőzde. Minden jog fenntartva.</p>
          </div>
        </div>
        <div className="greek-border-bottom mt-8"></div>
      </footer>
    </div>
  );
};

export default HomePage;