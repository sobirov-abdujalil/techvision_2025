import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [ticketsLeft, setTicketsLeft] = useState(47);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('final-cta');
    if (section) {
      observer?.observe(section);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    // Countdown timer
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
    // Simulate ticket scarcity
    const scarcityTimer = setInterval(() => {
      if (Math.random() > 0.85 && ticketsLeft > 0) {
        setTicketsLeft(prev => Math.max(0, prev - 1));
      }
    }, 30000);

    return () => clearInterval(scarcityTimer);
  }, [ticketsLeft]);

  const benefits = [
    {
      icon: "Users",
      text: "Network with 1,200+ tech leaders"
    },
    {
      icon: "Zap",
      text: "Access emerging tech 6 months early"
    },
    {
      icon: "TrendingUp",
      text: "87% report career advancement"
    },
    {
      icon: "Award",
      text: "Learn from industry pioneers"
    }
  ];

  const urgencyFactors = [
    {
      icon: "Clock",
      title: "Early Bird Ends Soon",
      description: `Save $300 - Only ${timeLeft?.days} days left`,
      color: "text-warning"
    },
    {
      icon: "Users",
      title: "Limited Availability",
      description: `Only ${ticketsLeft} early bird tickets remaining`,
      color: "text-error"
    },
    {
      icon: "Calendar",
      title: "March 15-17, 2025",
      description: "San Francisco Convention Center",
      color: "text-accent"
    }
  ];

  const handleGetTickets = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewSchedule = () => {
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main CTA Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline-black text-foreground mb-6 leading-tight">
            Your Career Transformation
            <span className="block text-gradient-primary">Starts Here</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Join 1,200+ technology leaders for three days that will accelerate your career, 
            expand your network, and give you exclusive access to the future of tech.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits?.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit?.icon} size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{benefit?.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-surface/80 to-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {urgencyFactors?.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center`}>
                    <Icon name={factor?.icon} size={24} className="text-white" />
                  </div>
                  <h3 className={`font-headline-bold mb-2 ${factor?.color}`}>
                    {factor?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {factor?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-headline-bold text-white mb-6">
              🔥 Early Bird Special Ends In
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-6">
              {[
                { label: 'Days', value: timeLeft?.days },
                { label: 'Hours', value: timeLeft?.hours },
                { label: 'Minutes', value: timeLeft?.minutes },
                { label: 'Seconds', value: timeLeft?.seconds }
              ]?.map((item, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-headline-bold text-white mb-1">
                    {item?.value?.toString()?.padStart(2, '0')}
                  </div>
                  <div className="text-sm text-white/80">{item?.label}</div>
                </div>
              ))}
            </div>
            <p className="text-white/90 text-lg">
              Save $300 and secure your spot at the premier tech conference
            </p>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="xl"
              className="shadow-cta animate-glow text-lg px-12 py-4"
              iconName="Ticket"
              iconPosition="left"
              onClick={handleGetTickets}
            >
              Claim Early Bird Ticket - Save $300
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="text-lg px-12 py-4"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleViewSchedule}
            >
              View Full Schedule
            </Button>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-accent" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" size={16} className="text-accent" />
              <span>Secure payment processing</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-headline-bold text-accent mb-2">1,247</div>
                <p className="text-sm text-muted-foreground">Already Registered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline-bold text-accent mb-2">89</div>
                <p className="text-sm text-muted-foreground">Companies Represented</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline-bold text-accent mb-2">94%</div>
                <p className="text-sm text-muted-foreground">Would Recommend</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "TechVision 2024 was the best investment I made for my career. 
                The connections I made led to my dream job at Google."
              </blockquote>
              <cite className="text-sm text-accent font-medium">
                — Sarah Mitchell, Senior Software Engineer at Google
              </cite>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Join with confidence. If TechVision 2025 doesn't exceed your expectations, 
            we'll refund your ticket price in full within 30 days of the event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;