import React, { useEffect, useRef } from 'react';

const ConversionTracker = ({
  onSectionView = () => {},
  onScrollDepth = () => {},
  onTimeOnSection = () => {},
  onNavigationClick = () => {},
  trackingEnabled = true
}) => {
  const sectionTimers = useRef({});
  const scrollDepthMarkers = useRef(new Set());
  const lastActiveSection = useRef('');

  useEffect(() => {
    if (!trackingEnabled) return;

    // Track scroll depth milestones
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100];
      milestones?.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthMarkers?.current?.has(milestone)) {
          scrollDepthMarkers?.current?.add(milestone);
          onScrollDepth({
            depth: milestone,
            timestamp: Date.now(),
            scrollPosition: scrollTop
          });
        }
      });
    };

    // Track section visibility and time spent
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries?.forEach((entry) => {
        const sectionId = entry?.target?.id;
        
        if (entry?.isIntersecting) {
          // Section became visible
          if (lastActiveSection?.current && lastActiveSection?.current !== sectionId) {
            // End timer for previous section
            const timeSpent = Date.now() - sectionTimers?.current?.[lastActiveSection?.current];
            onTimeOnSection({
              section: lastActiveSection?.current,
              timeSpent,
              timestamp: Date.now()
            });
          }

          // Start timer for current section
          sectionTimers.current[sectionId] = Date.now();
          lastActiveSection.current = sectionId;

          onSectionView({
            section: sectionId,
            timestamp: Date.now(),
            scrollPosition: window.pageYOffset
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['hero', 'speakers', 'schedule', 'pricing', 'venue', 'testimonials', 'faq'];
    sections?.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer?.observe(element);
      }
    });

    // Track navigation clicks
    const trackNavigationClicks = (event) => {
      const target = event?.target?.closest('a, button');
      if (target) {
        const href = target?.getAttribute('href');
        const text = target?.textContent?.trim();
        
        if (href && href?.startsWith('#')) {
          onNavigationClick({
            section: href?.replace('#', ''),
            linkText: text,
            timestamp: Date.now(),
            currentSection: lastActiveSection?.current
          });
        }
      }
    };

    // Scroll event listener
    const handleScroll = () => {
      requestAnimationFrame(trackScrollDepth);
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', trackNavigationClicks);

    // Initial scroll depth calculation
    trackScrollDepth();

    return () => {
      // Cleanup
      observer?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', trackNavigationClicks);

      // Record final time on section
      if (lastActiveSection?.current && sectionTimers?.current?.[lastActiveSection?.current]) {
        const timeSpent = Date.now() - sectionTimers?.current?.[lastActiveSection?.current];
        onTimeOnSection({
          section: lastActiveSection?.current,
          timeSpent,
          timestamp: Date.now()
        });
      }
    };
  }, [trackingEnabled, onSectionView, onScrollDepth, onTimeOnSection, onNavigationClick]);

  // This component renders nothing - it's purely for tracking
  return null;
};

export default ConversionTracker;