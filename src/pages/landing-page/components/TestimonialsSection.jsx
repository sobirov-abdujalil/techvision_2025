import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Samuel Mitchell",
      title: "Senior Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: `TechVision 2024 was a game-changer for my career. The networking opportunities were incredible - I connected with my current manager at Google during the VIP dinner. The sessions on AI and machine learning gave me the knowledge I needed to transition into ML engineering. Within 6 months, I had a 40% salary increase and my dream job.`,
      outcome: "40% salary increase, dream job at Google",
      rating: 5,
      videoUrl: null
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Founder & CEO",
      company: "DataFlow AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: `I pitched my startup idea to three different investors I met at TechVision. The feedback was invaluable, and one of them became our lead investor. The conference didn't just give me knowledge - it gave me the connections and confidence to build a $10M company. The ROI on that ticket was astronomical.`,
      outcome: "Raised $10M Series A funding",
      rating: 5,
      videoUrl: null
    },
    {
      id: 3,
      name: "Dr. Priyansh Sharma",
      title: "Head of Data Science",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: `The quantum computing sessions at TechVision opened my eyes to possibilities I hadn't considered. I met the IBM Quantum team and learned about opportunities in quantum machine learning. Six months later, I was leading Microsoft's quantum AI research division. The conference literally changed my career trajectory.`,
      outcome: "Promoted to Head of Quantum AI Research",
      rating: 5,
      videoUrl: null
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      title: "VP of Engineering",
      company: "Stripe",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: `The technical depth at TechVision is unmatched. I learned about distributed systems architecture that we immediately implemented at Stripe, improving our payment processing by 300%. The speakers aren't just talking theory - they're sharing real solutions to real problems. Every session was worth the entire ticket price.`,
      outcome: "300% improvement in system performance",
      rating: 5,
      videoUrl: null
    },
    {
      id: 5,
      name: "Jonathan Wu",
      title: "Security Architect",
      company: "Cloudflare",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: `TechVision's cybersecurity track was phenomenal. I learned about zero-trust architecture from industry leaders and implemented it at my company within 3 months. The hands-on workshops and real-world case studies made complex concepts immediately actionable. It's the best professional development investment I've ever made.`,
      outcome: "Implemented zero-trust security, prevented major breach",
      rating: 5,
      videoUrl: null
    }
  ];

  const companyLogos = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=200&h=100&fit=crop" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop" },
    { name: "Stripe", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" },
    { name: "Uber", logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop" }
  ];

  const successMetrics = [
    {
      icon: "TrendingUp",
      value: "87%",
      label: "Career Advancement",
      description: "Attendees report career growth within 12 months"
    },
    {
      icon: "DollarSign",
      value: "$2.3B",
      label: "Funding Raised",
      description: "By startups founded by TechVision alumni"
    },
    {
      icon: "Users",
      value: "15,000+",
      label: "Alumni Network",
      description: "Professionals in our global community"
    },
    {
      icon: "Award",
      value: "94%",
      label: "Satisfaction Rate",
      description: "Would recommend to colleagues"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Success <span className="text-gradient-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from technology professionals whose careers were transformed 
            by attending TechVision conferences.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, index) => (
                      <Icon key={index} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
                    "{testimonials?.[currentTestimonial]?.content}"
                  </blockquote>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Trophy" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-accent">Outcome</span>
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {testimonials?.[currentTestimonial]?.outcome}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrevious}
                      className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors"
                    >
                      <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors"
                    >
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {testimonials?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleTestimonialChange(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentTestimonial ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-surface/50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full">
                    <Image 
                      src={testimonials?.[currentTestimonial]?.image}
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-headline-bold text-foreground mb-2">
                    {testimonials?.[currentTestimonial]?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {testimonials?.[currentTestimonial]?.title}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {testimonials?.[currentTestimonial]?.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline-bold text-foreground mb-4">
              Proven Results
            </h3>
            <p className="text-muted-foreground">
              The numbers speak for themselves - TechVision delivers real career impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={32} className="text-white" />
                </div>
                <div className="text-3xl font-headline-bold text-accent mb-2">
                  {metric?.value}
                </div>
                <h4 className="font-headline-bold text-foreground mb-2">
                  {metric?.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {metric?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-headline-bold text-foreground mb-4">
              Trusted by Professionals From
            </h3>
            <p className="text-muted-foreground">
              Join attendees from the world's leading technology companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companyLogos?.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
                <Image 
                  src={company?.logo}
                  alt={company?.name}
                  className="max-w-full h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface/30 border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-headline-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of technology professionals who have accelerated their careers 
              through TechVision conferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-medium hover:shadow-cta transition-all duration-200"
              >
                Get Your Ticket Now
              </button>
              <button
                onClick={() => {
                  const speakersSection = document.getElementById('speakers');
                  if (speakersSection) {
                    speakersSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 border border-border text-foreground rounded-xl font-medium hover:border-accent/50 transition-colors"
              >
                View Speakers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;