import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuePropositionSection = () => {
  const benefits = [
    {
      id: 1,
      icon: "TrendingUp",
      title: "Career Advancement",
      description: "Connect with hiring managers from top tech companies and discover opportunities that aren\'t publicly advertised. 87% of attendees report career advancement within 6 months.",
      stats: "87% career growth",
      features: [
        "Exclusive job board access",
        "1-on-1 mentorship sessions",
        "Leadership workshops",
        "Salary negotiation masterclasses"
      ]
    },
    {
      id: 2,
      icon: "Network",
      title: "Exclusive Networking",
      description: "Build meaningful connections with 1,200+ technology leaders, startup founders, and industry pioneers in structured networking sessions designed for maximum value.",
      stats: "1,200+ attendees",
      features: [
        "Curated networking sessions",
        "Industry-specific meetups",
        "Founder & investor mixers",
        "Technical deep-dive groups"
      ]
    },
    {
      id: 3,
      icon: "Zap",
      title: "Cutting-Edge Technology",
      description: "Get hands-on experience with emerging technologies 6-12 months before market release. Access exclusive demos, beta programs, and technical previews.",
      stats: "50+ tech previews",
      features: [
        "AI/ML model previews",
        "Blockchain innovations",
        "Quantum computing demos",
        "Next-gen development tools"
      ]
    }
  ];

  return (
    <section id="value-proposition" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Why TechVision <span className="text-accent">2025</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the most influential technology conference where careers are transformed, 
            innovations are unveiled, and the future of tech is shaped.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit) => (
            <div 
              key={benefit?.id}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <Icon 
                    name={benefit?.icon} 
                    size={32} 
                    className="text-white" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-headline-bold text-foreground">
                    {benefit?.title}
                  </h3>
                  <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {benefit?.stats}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {benefit?.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {benefit?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <Icon name="Star" size={24} className="text-accent" />
            <span className="text-lg font-medium text-foreground">
              Join 1,200+ tech leaders shaping the future
            </span>
            <Icon name="ArrowRight" size={20} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;