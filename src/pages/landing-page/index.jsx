import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Import all components
import HeroSection from './components/HeroSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import SpeakerShowcase from './components/SpeakerShowcase';
import SchedulePreview from './components/SchedulePreview';
import PricingSection from './components/PricingSection';
import VenueSection from './components/VenueSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import RegistrationModal from './components/RegistrationModal';

// Import UI components
import SectionNavigation from '../../components/ui/SectionNavigation';
import ScrollProgress from '../../components/ui/ScrollProgress';
import ConversionTracker from '../../components/ui/ConversionTracker';

const LandingPage = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [selectedTicketTier, setSelectedTicketTier] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation sections configuration
  const navigationSections = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'speakers', label: 'Speakers', href: '#speakers' },
    { id: 'schedule', label: 'Schedule', href: '#schedule' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'venue', label: 'Venue', href: '#venue' },
    { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  // Handle registration modal
  const handleOpenRegistration = (ticketTier = null) => {
    setSelectedTicketTier(ticketTier);
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationModalOpen(false);
    setSelectedTicketTier(null);
  };

  // Handle section changes for analytics
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Conversion tracking handlers
  const handleSectionView = (data) => {
    // Track section views for analytics
    console.log('Section viewed:', data);
  };

  const handleScrollDepth = (data) => {
    // Track scroll depth milestones
    console.log('Scroll depth:', data);
  };

  const handleTimeOnSection = (data) => {
    // Track time spent on sections
    console.log('Time on section:', data);
  };

  const handleNavigationClick = (data) => {
    // Track navigation clicks
    console.log('Navigation click:', data);
  };

  // Listen for registration events from child components
  useEffect(() => {
    const handleRegistrationEvent = (event) => {
      if (event?.detail?.ticketTier) {
        handleOpenRegistration(event?.detail?.ticketTier);
      } else {
        handleOpenRegistration();
      }
    };

    window.addEventListener('openRegistration', handleRegistrationEvent);
    return () => window.removeEventListener('openRegistration', handleRegistrationEvent);
  }, []);

  // Smooth scroll behavior for internal links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location?.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element?.getBoundingClientRect()?.top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Helmet>
        <title>TechVision 2025 - Where Tech Leaders Shape Tomorrow</title>
        <meta name="description" content="Join 1,200+ technology professionals at TechVision 2025. Learn from industry pioneers, network with leaders, and get exclusive access to emerging technologies. March 15-17, San Francisco." />
        <meta name="keywords" content="tech conference, technology summit, AI conference, software development, networking, San Francisco, TechVision 2025" />
        <meta property="og:title" content="TechVision 2025 - Where Tech Leaders Shape Tomorrow" />
        <meta property="og:description" content="The premier technology conference for career advancement and industry insights. Join us March 15-17 in San Francisco." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techvision2025.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechVision 2025 - Where Tech Leaders Shape Tomorrow" />
        <meta name="twitter:description" content="Join 1,200+ tech professionals for 3 days of innovation, networking, and career growth." />
        <link rel="canonical" href="https://techvision2025.com" />
      </Helmet>
      {/* Navigation */}
      <SectionNavigation 
        sections={navigationSections}
        onSectionChange={handleSectionChange}
      />
      {/* Scroll Progress Indicator */}
      <ScrollProgress showPercentage={false} />
      {/* Conversion Tracking */}
      <ConversionTracker
        onSectionView={handleSectionView}
        onScrollDepth={handleScrollDepth}
        onTimeOnSection={handleTimeOnSection}
        onNavigationClick={handleNavigationClick}
        trackingEnabled={true}
      />
      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />

        {/* Value Proposition */}
        <ValuePropositionSection />

        {/* Speaker Showcase */}
        <SpeakerShowcase />

        {/* Schedule Preview */}
        <SchedulePreview />

        {/* Pricing Section */}
        <PricingSection />

        {/* Venue Information */}
        <VenueSection />

        {/* Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={handleCloseRegistration}
        selectedTier={selectedTicketTier}
      />
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-headline-bold text-sm">TV</span>
                </div>
                <span className="text-xl font-headline-bold text-foreground">
                  TechVision <span className="text-accent font-mono">2025</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The premier technology conference where careers are transformed and the future is shaped.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-headline-bold text-foreground mb-4">Conference</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#speakers" className="text-muted-foreground hover:text-accent transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="text-muted-foreground hover:text-accent transition-colors">Schedule</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">Tickets</a></li>
                <li><a href="#venue" className="text-muted-foreground hover:text-accent transition-colors">Venue</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-headline-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="mailto:support@techvision2025.com" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-headline-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>March 15-17, 2025</p>
                <p>San Francisco Convention Center</p>
                <p>747 Howard St, San Francisco, CA</p>
                <p>
                  <a href="mailto:info@techvision2025.com" className="hover:text-accent transition-colors">
                    info@techvision2025.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1-555-TECH-2025" className="hover:text-accent transition-colors">
                    +1 (555) TECH-2025
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} TechVision Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;