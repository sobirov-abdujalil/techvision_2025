import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const SectionNavigation = ({ 
  sections = [
    { id: 'speakers', label: 'Speakers', href: '#speakers' },
    { id: 'schedule', label: 'Schedule', href: '#schedule' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'venue', label: 'Venue', href: '#venue' }
  ],
  onSectionChange = () => {},
  className = ''
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries?.forEach((entry) => {
        if (entry?.isIntersecting) {
          const sectionId = entry?.target?.id;
          setActiveSection(sectionId);
          onSectionChange(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections?.forEach((section) => {
      const element = document.getElementById(section?.id);
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
    };
  }, [sections, onSectionChange]);

  const handleSectionClick = (sectionId, href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    onSectionChange(sectionId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-100 bg-background/95 backdrop-blur-sm border-b border-border ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-headline-bold text-sm">TV</span>
                </div>
                <span className="text-xl font-headline-bold text-foreground">
                  TechVision <span className="text-accent font-mono">2025</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => handleSectionClick(section?.id, section?.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent ${
                      activeSection === section?.id
                        ? 'text-accent border-b-2 border-accent' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {section?.label}
                  </button>
                ))}
                <Button 
                  variant="default" 
                  size="sm"
                  className="ml-4 shadow-cta"
                  onClick={() => handleSectionClick('pricing', '#pricing')}
                >
                  Get Tickets
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                aria-expanded="false"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="transition-transform duration-200" 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-150 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-headline-bold text-sm">TV</span>
                  </div>
                  <span className="text-xl font-headline-bold text-foreground">
                    TechVision <span className="text-accent font-mono">2025</span>
                  </span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-6">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => handleSectionClick(section?.id, section?.href)}
                    className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
                      activeSection === section?.id
                        ? 'text-accent bg-accent/10 border border-accent/20' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                    }`}
                  >
                    {section?.label}
                  </button>
                ))}
                
                <div className="pt-6">
                  <Button 
                    variant="default" 
                    size="lg"
                    fullWidth
                    className="shadow-cta"
                    onClick={() => handleSectionClick('pricing', '#pricing')}
                  >
                    Get Tickets Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default SectionNavigation;