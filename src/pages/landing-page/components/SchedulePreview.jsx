import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchedulePreview = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [expandedSession, setExpandedSession] = useState(null);

  const schedule = {
    1: {
      date: "March 15, 2025",
      theme: "AI & Machine Learning",
      sessions: [
        {
          id: 1,
          time: "9:00 AM - 9:30 AM",
          title: "Registration & Welcome Coffee",
          type: "networking",
          speaker: null,
          capacity: "Unlimited",
          difficulty: null,
          description: "Network with fellow attendees while enjoying premium coffee and pastries. Pick up your conference materials and explore sponsor booths.",
          takeaways: [],
          location: "Main Lobby"
        },
        {
          id: 2,
          time: "9:30 AM - 10:00 AM",
          title: "Opening Keynote: The AI Revolution",
          type: "keynote",
          speaker: "Sarah Chen, CTO at Meta",
          capacity: "1,200 seats",
          difficulty: "Beginner",
          description: "Explore how AI is transforming every aspect of technology and business. Sarah will share Meta's AI strategy and provide insights into the next decade of artificial intelligence.",
          takeaways: [
            "Understanding AI\'s current capabilities and limitations",
            "Strategic approaches to AI implementation",
            "Future trends in AI development"
          ],
          location: "Main Auditorium"
        },
        {
          id: 3,
          time: "10:00 AM - 11:00 AM",
          title: "The Future of AI in Social Platforms",
          type: "session",
          speaker: "Sarah Chen, CTO at Meta",
          capacity: "400 seats",
          difficulty: "Advanced",
          description: "Deep dive into how AI powers recommendation engines, content moderation, and user experiences across billions of users. Learn about the technical challenges and solutions.",
          takeaways: [
            "Latest breakthroughs in large language models",
            "Scaling AI systems for billions of users",
            "Ethical AI implementation strategies"
          ],
          location: "Tech Theater"
        },
        {
          id: 4,
          time: "11:30 AM - 12:30 PM",
          title: "Building AI-First Products",
          type: "workshop",
          speaker: "Panel of AI Product Leaders",
          capacity: "150 seats",
          difficulty: "Intermediate",
          description: "Interactive workshop on designing and building products with AI at the core. Includes hands-on exercises and real-world case studies.",
          takeaways: [
            "AI product design principles",
            "User experience considerations for AI features",
            "Measuring AI product success"
          ],
          location: "Workshop Room A"
        },
        {
          id: 5,
          time: "2:00 PM - 3:00 PM",
          title: "From Zero to Unicorn: Scaling Tech Startups",
          type: "session",
          speaker: "Marcus Rodriguez, CEO at TechFlow Ventures",
          capacity: "600 seats",
          difficulty: "Intermediate",
          description: "Learn the strategies and tactics used to scale startups from idea to billion-dollar valuations. Marcus shares insights from building and investing in successful companies.",
          takeaways: [
            "Fundraising strategies for different stages",
            "Building scalable tech teams",
            "Product-market fit validation methods"
          ],
          location: "Main Auditorium"
        }
      ]
    },
    2: {
      date: "March 16, 2025",
      theme: "Emerging Technologies",
      sessions: [
        {
          id: 6,
          time: "9:00 AM - 10:00 AM",
          title: "Quantum Computing: Ready for Production?",
          type: "session",
          speaker: "Dr. Priya Patel, Head of Quantum Research at IBM",
          capacity: "300 seats",
          difficulty: "Advanced",
          description: "Explore the current state of quantum computing and its practical applications. Learn about quantum advantage and when businesses should start preparing.",
          takeaways: [
            "Current state of quantum computing",
            "Real-world quantum applications",
            "Timeline for quantum advantage"
          ],
          location: "Innovation Lab"
        },
        {
          id: 7,
          time: "11:00 AM - 12:00 PM",
          title: "Building Global Payment Infrastructure",
          type: "session",
          speaker: "Alex Thompson, VP of Engineering at Stripe",
          capacity: "500 seats",
          difficulty: "Intermediate",
          description: "Learn how to build payment systems that can handle billions of transactions across 100+ countries. Covers technical architecture, compliance, and scaling challenges.",
          takeaways: [
            "Designing resilient payment systems",
            "Global compliance and regulations",
            "API design for financial services"
          ],
          location: "Fintech Stage"
        },
        {
          id: 8,
          time: "3:00 PM - 4:00 PM",
          title: "Zero Trust Security in the Cloud Era",
          type: "session",
          speaker: "Jennifer Wu, CSO at Cloudflare",
          capacity: "400 seats",
          difficulty: "Advanced",
          description: "Implement zero trust security architecture for modern cloud environments. Learn from real-world examples of protecting internet infrastructure.",
          takeaways: [
            "Implementing zero trust architecture",
            "Cloud security best practices",
            "Threat intelligence and response"
          ],
          location: "Security Theater"
        }
      ]
    },
    3: {
      date: "March 17, 2025",
      theme: "Developer Experience",
      sessions: [
        {
          id: 9,
          time: "10:00 AM - 11:00 AM",
          title: "The Future of Software Development",
          type: "session",
          speaker: "David Kim, Director of Developer Experience at GitHub",
          capacity: "800 seats",
          difficulty: "Beginner",
          description: "Explore how AI is changing software development workflows. Learn about the tools and practices that will define the next generation of programming.",
          takeaways: [
            "AI-assisted development workflows",
            "Building developer-first platforms",
            "Open source sustainability models"
          ],
          location: "Main Auditorium"
        },
        {
          id: 10,
          time: "2:00 PM - 4:00 PM",
          title: "Hands-on: Building with AI APIs",
          type: "workshop",
          speaker: "GitHub Developer Relations Team",
          capacity: "100 seats",
          difficulty: "Intermediate",
          description: "Interactive coding workshop where you\'ll build AI-powered applications using popular APIs. Bring your laptop and get ready to code!",
          takeaways: [
            "Practical AI API integration",
            "Best practices for AI-powered apps",
            "Deployment and scaling strategies"
          ],
          location: "Code Lab"
        }
      ]
    }
  };

  const sessionTypeIcons = {
    keynote: "Mic",
    session: "Users",
    workshop: "Code",
    networking: "Coffee"
  };

  const difficultyColors = {
    Beginner: "text-green-400 bg-green-400/10",
    Intermediate: "text-yellow-400 bg-yellow-400/10",
    Advanced: "text-red-400 bg-red-400/10"
  };

  const handleAddToCalendar = (session) => {
    const startDate = new Date(`${schedule[selectedDay].date} ${session.time.split(' - ')[0]}`);
    const endDate = new Date(`${schedule[selectedDay].date} ${session.time.split(' - ')[1]}`);
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(session?.title)}&dates=${startDate?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z/${endDate?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z&details=${encodeURIComponent(session?.description)}&location=${encodeURIComponent(session?.location)}`;
    
    window.open(calendarUrl, '_blank');
  };

  const handleShareSession = (session) => {
    if (navigator.share) {
      navigator.share({
        title: session?.title,
        text: session?.description,
        url: window.location?.href
      });
    } else {
      navigator.clipboard?.writeText(`${session?.title} - ${window.location?.href}`);
    }
  };

  return (
    <section id="schedule" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Conference <span className="text-gradient-primary">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days packed with insights, networking, and hands-on learning. 
            Choose your track and build your personalized agenda.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-2xl p-2 inline-flex">
            {Object.entries(schedule)?.map(([day, data]) => (
              <button
                key={day}
                onClick={() => setSelectedDay(parseInt(day))}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedDay === parseInt(day)
                    ? 'bg-gradient-primary text-white shadow-cta'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm">Day {day}</div>
                  <div className="text-xs opacity-80">{data?.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Day Theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-2xl px-6 py-3">
            <Icon name="Calendar" size={20} className="text-accent" />
            <span className="font-medium text-foreground">
              {schedule?.[selectedDay]?.date} - {schedule?.[selectedDay]?.theme}
            </span>
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          {schedule?.[selectedDay]?.sessions?.map((session) => (
            <div 
              key={session?.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Icon 
                        name={sessionTypeIcons?.[session?.type]} 
                        size={20} 
                        className="text-accent" 
                      />
                      <span className="text-sm font-medium text-accent capitalize">
                        {session?.type}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {session?.time}
                    </span>
                    {session?.difficulty && (
                      <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors?.[session?.difficulty]}`}>
                        {session?.difficulty}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Calendar"
                      onClick={() => handleAddToCalendar(session)}
                    >
                      Add to Calendar
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Share"
                      onClick={() => handleShareSession(session)}
                    >
                      Share
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-headline-bold text-foreground mb-2">
                  {session?.title}
                </h3>

                {session?.speaker && (
                  <p className="text-sm text-muted-foreground mb-3">
                    Speaker: {session?.speaker}
                  </p>
                )}

                <p className="text-muted-foreground mb-4">
                  {session?.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{session?.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{session?.capacity}</span>
                  </div>
                </div>

                {session?.takeaways?.length > 0 && (
                  <div>
                    <button
                      onClick={() => setExpandedSession(
                        expandedSession === session?.id ? null : session?.id
                      )}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <Icon 
                        name={expandedSession === session?.id ? "ChevronUp" : "ChevronDown"} 
                        size={16} 
                      />
                      Key Takeaways
                    </button>

                    {expandedSession === session?.id && (
                      <div className="mt-4 p-4 bg-surface/50 rounded-xl">
                        <ul className="space-y-2">
                          {session?.takeaways?.map((takeaway, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-headline-bold text-white mb-4">
              Don't Miss Out on These Sessions
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Secure your spot at TechVision 2025 and get access to all sessions, 
              workshops, and networking opportunities.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Ticket"
              iconPosition="left"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Your Tickets Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;