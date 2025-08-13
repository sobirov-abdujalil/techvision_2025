import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      category: "General",
      question: "What is TechVision 2025 and who should attend?",
      answer: `TechVision 2025 is the premier technology conference bringing together 1,200+ professionals including software developers, product managers, CTOs, startup founders, and tech entrepreneurs. It's designed for anyone looking to advance their career, stay current with emerging technologies, and build meaningful professional connections.\n\nWhether you're a seasoned executive or early-career professional, TechVision offers content and networking opportunities tailored to your growth stage. Our diverse speaker lineup and track system ensure relevant content for all experience levels.`,
      videoResponse: false
    },
    {
      id: 2,
      category: "ROI",
      question: "How do I justify the cost to my manager or company?",
      answer: `TechVision attendees report an average 23% salary increase within 12 months, making the conference fee a high-ROI investment. Here's how to build your business case:\n\n• **Immediate Value**: Access to cutting-edge technologies 6-12 months before market release\n• **Skill Development**: 40+ hours of expert-led sessions and workshops\n• **Networking**: Connect with hiring managers and decision-makers from top tech companies\n• **Knowledge Transfer**: Share learnings with your team through session recordings and materials\n• **Competitive Advantage**: Implement strategies and technologies ahead of competitors\n\nWe provide a detailed ROI calculator and justification template to help you secure company funding.`,
      videoResponse: false
    },
    {
      id: 3,
      category: "Content",
      question: "How do I know the content will be relevant and high-quality?",
      answer: `Our content quality is backed by industry-leading speakers and rigorous curation:\n\n• **Speaker Credentials**: All speakers are practitioners, not just theorists - CTOs, founders, and technical leaders from companies like Meta, Google, Stripe, and IBM\n• **Real-World Focus**: Sessions cover implemented solutions and lessons learned, not just concepts\n• **Peer Validation**: 94% of previous attendees rate content quality as "excellent" or "outstanding"\n• **Diverse Tracks**: AI/ML, cybersecurity, fintech, quantum computing, developer experience, and more\n• **Hands-On Learning**: Interactive workshops and demo sessions for practical application\n\nAll sessions are recorded and available for 30 days, so you can revisit content and share with your team.`,
      videoResponse: false
    },
    {
      id: 4,
      category: "Logistics",
      question: "What\'s included in my ticket and what should I expect?",
      answer: `Your TechVision ticket includes everything you need for a complete conference experience:\n\n**Included in All Tickets:**\n• Access to all sessions, keynotes, and workshops (3 days)\n• All meals: breakfast, lunch, dinner, and refreshments\n• Networking events and mixers\n• Conference materials and premium swag bag\n• Mobile app with agenda, networking features, and maps\n• Digital session recordings (30-day access)\n• Certificate of attendance for professional development\n\n**VIP Additions:**\n• Reserved front-row seating\n• Exclusive VIP lounge with premium catering\n• Private networking dinner with speakers\n• One-on-one mentorship session\n• Lifetime access to recordings\n• Professional headshots\n\nThe venue offers high-speed WiFi, charging stations, and comfortable seating throughout.`,
      videoResponse: false
    },
    {
      id: 5,
      category: "Networking",
      question: "How does networking actually work? I'm not great at approaching strangers.",
      answer: `We've designed TechVision networking to be comfortable and productive, even for introverts:\n\n**Structured Networking:**\n• Speed networking sessions with conversation starters\n• Industry-specific meetups (AI, fintech, startups, etc.)\n• Skill-based roundtables with guided discussions\n• Mentorship matching through our mobile app\n\n**Natural Conversation Opportunities:**\n• Shared meals with assigned seating to meet new people\n• Workshop breakout sessions with small groups\n• Demo areas where you can discuss technologies\n• Quiet networking lounges for focused conversations\n\n**Digital Support:**\n• Mobile app for pre-event connection requests\n• LinkedIn integration for easy follow-ups\n• Conversation starter guides and networking tips\n• Dedicated networking concierge to make introductions\n\nMany attendees report that the structured approach helped them make more meaningful connections than traditional networking events.`,
      videoResponse: false
    },
    {
      id: 6,
      category: "Logistics",
      question: "What if I can't attend in person? Are there virtual options?",
      answer: `While TechVision 2025 is designed as an in-person experience for maximum networking value, we understand travel constraints:\n\n**Hybrid Options:**\n• Live streaming of keynotes and select sessions\n• Virtual networking rooms during breaks\n• Digital access to all session recordings\n• Online Q&A participation during live sessions\n• Virtual expo hall with sponsor demos\n\n**However, you'll miss:**\n• Face-to-face networking opportunities\n• Hands-on workshops and demos\n• Spontaneous conversations and connections\n• VIP events and exclusive experiences\n• The energy and inspiration of being in the room\n\nWe strongly recommend attending in person if possible, as 89% of career breakthroughs reported by attendees came from in-person interactions. Virtual tickets are available at a reduced rate for those who cannot travel.`,
      videoResponse: false
    },
    {
      id: 7,
      category: "Practical",
      question: "What's the refund policy and what if something comes up?",
      answer: `We offer flexible policies to accommodate changing circumstances:\n\n**Refund Policy:**\n• Full refund: Up to 30 days before the event\n• 50% refund: 15-30 days before the event\n• 25% refund: 7-15 days before the event\n• No refund: Less than 7 days before (except emergencies)\n\n**Transfer Options:**\n• Free ticket transfer to a colleague anytime\n• Credit toward future TechVision events (full value)\n• Upgrade/downgrade options available until 48 hours before\n\n**Emergency Situations:**\n• Medical emergencies: Full refund with documentation\n• Company layoffs: Full refund with verification\n• Travel restrictions: Credit for future events\n\n**COVID-19 Considerations:**\n• If you test positive within 5 days of the event, full credit for future events\n• If the event is cancelled due to health restrictions, full refund\n\nWe want you to feel confident in your investment and will work with you on reasonable accommodation requests.`,
      videoResponse: false
    },
    {
      id: 8,
      category: "Follow-up",
      question: "What happens after the conference? How do I maintain momentum?",
      answer: `TechVision's value extends far beyond the three-day event:\n\n**Immediate Follow-up (Week 1):**\n• Access to all session recordings and slides\n• Attendee directory with contact information (opt-in)\n• Action plan template to implement learnings\n• Follow-up resources and reading lists from speakers\n\n**Ongoing Community (Months 1-12):**\n• Private LinkedIn group for continued discussions\n• Monthly virtual meetups with guest speakers\n• Job board with opportunities from attending companies\n• Mentorship program matching\n• Early access to TechVision 2026 tickets\n\n**Long-term Benefits:**\n• Alumni network of 15,000+ professionals globally\n• Quarterly industry reports and trend analysis\n• Invitation to exclusive alumni events throughout the year\n• Speaker bureau opportunities for experienced attendees\n• Startup pitch opportunities at future events\n\nMany attendees report that the ongoing community and relationships are as valuable as the conference itself. We're committed to supporting your professional growth long after the event ends.`,
      videoResponse: false
    }
  ];

  const categories = ["All", "General", "ROI", "Content", "Logistics", "Networking", "Practical", "Follow-up"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs?.filter(faq => faq?.category === selectedCategory);

  const handleFAQToggle = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setExpandedFAQ(null);
  };

  return (
    <section id="faq" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Common <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most frequently asked questions about TechVision 2025. 
            Still have questions? Contact our team directly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-cta'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs?.map((faq) => (
            <div 
              key={faq?.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <button
                onClick={() => handleFAQToggle(faq?.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium flex-shrink-0 mt-1">
                    {faq?.category}
                  </span>
                  <h3 className="text-lg font-headline-bold text-foreground">
                    {faq?.question}
                  </h3>
                </div>
                <Icon 
                  name={expandedFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-muted-foreground flex-shrink-0 ml-4" 
                />
              </button>

              {expandedFAQ === faq?.id && (
                <div className="px-6 pb-6">
                  <div className="pl-20">
                    <div className="prose prose-invert max-w-none">
                      {faq?.answer?.split('\n\n')?.map((paragraph, index) => (
                        <div key={index} className="mb-4">
                          {paragraph?.includes('•') ? (
                            <div>
                              {paragraph?.split('\n')?.map((line, lineIndex) => {
                                if (line?.includes('•')) {
                                  const [bullet, ...restParts] = line?.split('•');
                                  const content = restParts?.join('•')?.trim();
                                  const [title, description] = content?.split(':');
                                  
                                  return (
                                    <div key={lineIndex} className="flex items-start gap-3 mb-2">
                                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                      <div>
                                        {description ? (
                                          <>
                                            <span className="font-medium text-foreground">{title}:</span>
                                            <span className="text-muted-foreground">{description}</span>
                                          </>
                                        ) : (
                                          <span className="text-muted-foreground">{content}</span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                } else if (line?.trim()) {
                                  return (
                                    <p key={lineIndex} className="text-muted-foreground mb-2">
                                      {line?.includes('**') ? (
                                        line?.split('**')?.map((part, partIndex) => 
                                          partIndex % 2 === 1 ? (
                                            <span key={partIndex} className="font-medium text-foreground">{part}</span>
                                          ) : (
                                            part
                                          )
                                        )
                                      ) : (
                                        line
                                      )}
                                    </p>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed">
                              {paragraph?.includes('**') ? (
                                paragraph?.split('**')?.map((part, partIndex) => 
                                  partIndex % 2 === 1 ? (
                                    <span key={partIndex} className="font-medium text-foreground">{part}</span>
                                  ) : (
                                    part
                                  )
                                )
                              ) : (
                                paragraph
                              )}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {faq?.videoResponse && (
                      <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Play" size={16} className="text-accent" />
                          <span className="text-sm font-medium text-accent">Video Response Available</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Watch a detailed video response to this question from our conference director.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-headline-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you make the most of your TechVision 2025 experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@techvision2025.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl font-medium hover:shadow-cta transition-all duration-200"
              >
                <Icon name="Mail" size={16} />
                Email Support
              </a>
              <a 
                href="tel:+1-555-TECH-2025"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:border-accent/50 transition-colors"
              >
                <Icon name="Phone" size={16} />
                Call Us
              </a>
              <button
                onClick={() => {
                  // In a real app, this would open a chat widget
                  alert('Live chat feature would open here');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:border-accent/50 transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;