import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [registrations, setRegistrations] = useState(1247);
  const [companies, setCompanies] = useState(89);
  const [connections, setConnections] = useState(3456);

  useEffect(() => {
    // Early bird deadline: 30 days from now
    const earlyBirdDeadline = new Date();
    earlyBirdDeadline?.setDate(earlyBirdDeadline?.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date()?.getTime();
      const distance = earlyBirdDeadline?.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time registration updates
    const updateTimer = setInterval(() => {
      setRegistrations(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setCompanies(prev => prev + 1);
      }
      setConnections(prev => prev + Math.floor(Math.random() * 5));
    }, 30000);

    return () => clearInterval(updateTimer);
  }, []);

  const handleGetTickets = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewSpeakers = () => {
    const speakersSection = document.getElementById('speakers');
    if (speakersSection) {
      speakersSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Headlines */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline-black text-foreground mb-6 leading-tight">
            Where Tech Leaders
            <span className="block text-gradient-primary">Shape Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get exclusive access to emerging technologies before they become mainstream. 
            Connect with industry pioneers and accelerate your career at the premier technology conference.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="inline-block bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-lg font-headline text-accent mb-4 flex items-center justify-center gap-2">
              <Icon name="Clock" size={20} />
              Early Bird Pricing Ends In
            </h3>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft?.days },
                { label: 'Hours', value: timeLeft?.hours },
                { label: 'Minutes', value: timeLeft?.minutes },
                { label: 'Seconds', value: timeLeft?.seconds }
              ]?.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-primary text-white rounded-xl p-4 mb-2 min-w-[80px]">
                    <span className="text-2xl md:text-4xl font-headline-bold">
                      {item?.value?.toString()?.padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item?.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="default" 
            size="xl"
            className="shadow-cta animate-glow"
            iconName="Ticket"
            iconPosition="left"
            onClick={handleGetTickets}
          >
            Get Early Bird Tickets
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            iconName="Users"
            iconPosition="left"
            onClick={handleViewSpeakers}
          >
            View Speaker Lineup
          </Button>
        </div>

        {/* Trust Bar */}
        <div className="bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Users" size={20} className="text-accent" />
                <span className="text-2xl font-headline-bold text-foreground">{registrations?.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Professionals Registered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Building2" size={20} className="text-accent" />
                <span className="text-2xl font-headline-bold text-foreground">{companies}</span>
              </div>
              <p className="text-sm text-muted-foreground">Companies Represented</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Network" size={20} className="text-accent" />
                <span className="text-2xl font-headline-bold text-foreground">{connections?.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Connections Made (2024)</p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;