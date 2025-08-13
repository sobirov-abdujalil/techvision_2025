import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const SpeakerShowcase = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: "Samuel Chen",
      title: "Chief Technology Officer",
      company: "Meta",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["AI/ML", "Distributed Systems", "Product Strategy"],
      session: "The Future of AI in Social Platforms",
      description:
        "Samuel leads Meta's technology vision, overseeing AI research and implementation across 3+ billion users. Former Google DeepMind researcher with 15+ years in machine learning.",
      achievements: [
        "Led development of Meta's AI recommendation engine",
        "Published 50+ papers in top-tier ML conferences",
        "Named in Forbes 40 Under 40 Tech Leaders",
      ],
      sessionDetails: {
        time: "Day 1, 10:00 AM - 11:00 AM",
        track: "AI & Machine Learning",
        level: "Advanced",
        takeaways: [
          "Latest breakthroughs in large language models",
          "Scaling AI systems for billions of users",
          "Ethical AI implementation strategies",
        ],
      },
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Founder & CEO",
      company: "TechFlow Ventures",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Startup Strategy", "Venture Capital", "Product Management"],
      session: "From Zero to Unicorn: Scaling Tech Startups",
      description:
        "Marcus built and sold 3 successful startups, now invests in early-stage tech companies. Portfolio includes 12 unicorns with combined valuation of $50B+.",
      achievements: [
        "Exited 3 startups for $2.1B combined",
        "Invested in 150+ early-stage companies",
        "Mentor at Y Combinator and Techstars",
      ],
      sessionDetails: {
        time: "Day 1, 2:00 PM - 3:00 PM",
        track: "Entrepreneurship",
        level: "Intermediate",
        takeaways: [
          "Fundraising strategies for different stages",
          "Building scalable tech teams",
          "Product-market fit validation methods",
        ],
      },
    },
    {
      id: 3,
      name: "Dr. Priyansh Patel",
      title: "Head of Quantum Research",
      company: "IBM Quantum",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Quantum Computing", "Cryptography", "Research"],
      session: "Quantum Computing: Ready for Production?",
      description:
        "Dr. Patel leads IBM's quantum computing research, developing practical applications for enterprise use. PhD in Quantum Physics from MIT, 20+ years in quantum research.",
      achievements: [
        "Led development of 1000+ qubit quantum processor",
        "Author of 'Quantum Computing for Business'",
        "Holds 25 patents in quantum technologies",
      ],
      sessionDetails: {
        time: "Day 2, 9:00 AM - 10:00 AM",
        track: "Emerging Technologies",
        level: "Advanced",
        takeaways: [
          "Current state of quantum computing",
          "Real-world quantum applications",
          "Timeline for quantum advantage",
        ],
      },
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "VP of Engineering",
      company: "Stripe",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Fintech", "Distributed Systems", "API Design"],
      session: "Building Global Payment Infrastructure",
      description:
        "Alex oversees Stripe's engineering organization, managing systems that process $800B+ annually. Expert in building resilient, scalable financial systems.",
      achievements: [
        "Scaled Stripe to process $800B+ annually",
        "Built payment systems for 100+ countries",
        "Speaker at 50+ international conferences",
      ],
      sessionDetails: {
        time: "Day 2, 11:00 AM - 12:00 PM",
        track: "Fintech & Payments",
        level: "Intermediate",
        takeaways: [
          "Designing resilient payment systems",
          "Global compliance and regulations",
          "API design for financial services",
        ],
      },
    },
    {
      id: 5,
      name: "Jonathan Wu",
      title: "Chief Security Officer",
      company: "Cloudflare",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Cybersecurity", "Zero Trust", "Incident Response"],
      session: "Zero Trust Security in the Cloud Era",
      description:
        "Jonathan protects internet infrastructure serving 25+ million domains. Former NSA cybersecurity analyst with expertise in nation-state threat detection.",
      achievements: [
        "Defended against largest DDoS attacks in history",
        "Built security systems protecting 25M+ domains",
        "Keynote speaker at RSA Conference",
      ],
      sessionDetails: {
        time: "Day 2, 3:00 PM - 4:00 PM",
        track: "Cybersecurity",
        level: "Advanced",
        takeaways: [
          "Implementing zero trust architecture",
          "Cloud security best practices",
          "Threat intelligence and response",
        ],
      },
    },
    {
      id: 6,
      name: "David Kim",
      title: "Director of Developer Experience",
      company: "GitHub",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      expertise: ["Developer Tools", "Open Source", "Platform Engineering"],
      session: "The Future of Software Development",
      description:
        "David shapes how 100M+ developers build software on GitHub. Expert in developer productivity, open source ecosystems, and AI-assisted coding.",
      achievements: [
        "Launched GitHub Copilot to 1M+ developers",
        "Built developer tools used by 100M+ users",
        "Contributed to 500+ open source projects",
      ],
      sessionDetails: {
        time: "Day 3, 10:00 AM - 11:00 AM",
        track: "Developer Tools",
        level: "Beginner",
        takeaways: [
          "AI-assisted development workflows",
          "Building developer-first platforms",
          "Open source sustainability models",
        ],
      },
    },
  ];

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  const handleReserveSpot = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection?.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedSpeaker(null);
  };

  return (
    <section id="speakers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Learn from{" "}
            <span className="text-gradient-primary">Industry Pioneers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get insights from technology leaders who are shaping the future.
            Each speaker brings decades of experience and exclusive industry
            knowledge.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers?.map((speaker) => (
            <div
              key={speaker?.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleSpeakerClick(speaker)}
            >
              {/* Speaker Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={speaker?.image}
                  alt={speaker?.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View Session Details
                  </Button>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-headline-bold text-foreground mb-1">
                    {speaker?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {speaker?.title} at {speaker?.company}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Session:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {speaker?.session}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {speaker?.expertise?.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="Users"
            iconPosition="left"
            onClick={() => {
              const scheduleSection = document.getElementById("schedule");
              if (scheduleSection) {
                scheduleSection?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Complete Schedule
          </Button>
        </div>
      </div>
      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-headline-bold text-foreground">
                Speaker Details
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
              >
                <Icon name="X" size={24} className="text-muted-foreground" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Speaker Info */}
                <div className="lg:col-span-1">
                  <Image
                    src={selectedSpeaker?.image}
                    alt={selectedSpeaker?.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <h4 className="text-xl font-headline-bold text-foreground mb-2">
                    {selectedSpeaker?.name}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {selectedSpeaker?.title} at {selectedSpeaker?.company}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSpeaker?.expertise?.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Session Details */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h5 className="text-lg font-headline-bold text-foreground mb-2">
                      {selectedSpeaker?.session}
                    </h5>
                    <p className="text-muted-foreground mb-4">
                      {selectedSpeaker?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h6 className="font-medium text-foreground mb-3">
                        Session Info
                      </h6>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          <span>{selectedSpeaker?.sessionDetails?.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Tag" size={16} />
                          <span>{selectedSpeaker?.sessionDetails?.track}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="BarChart" size={16} />
                          <span>{selectedSpeaker?.sessionDetails?.level}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium text-foreground mb-3">
                        Key Takeaways
                      </h6>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {selectedSpeaker?.sessionDetails?.takeaways?.map(
                          (takeaway, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{takeaway}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="font-medium text-foreground mb-3">
                      Achievements
                    </h6>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {selectedSpeaker?.achievements?.map(
                        (achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon
                              name="Award"
                              size={16}
                              className="text-accent mt-0.5 flex-shrink-0"
                            />
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    className="shadow-cta"
                    iconName="Ticket"
                    iconPosition="left"
                    onClick={handleReserveSpot}
                  >
                    Reserve My Spot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SpeakerShowcase;
