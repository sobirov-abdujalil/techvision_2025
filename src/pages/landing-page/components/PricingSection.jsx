import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PricingSection = () => {
  const [selectedTier, setSelectedTier] = useState("regular");
  const [earlyBirdTimeLeft, setEarlyBirdTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [earlyBirdTicketsLeft, setEarlyBirdTicketsLeft] = useState(47);

  useEffect(() => {
    // Early bird deadline: 30 days from now
    const earlyBirdDeadline = new Date();
    earlyBirdDeadline?.setDate(earlyBirdDeadline?.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date()?.getTime();
      const distance = earlyBirdDeadline?.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setEarlyBirdTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setEarlyBirdTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate ticket scarcity updates
    const scarcityTimer = setInterval(() => {
      if (Math.random() > 0.8 && earlyBirdTicketsLeft > 0) {
        setEarlyBirdTicketsLeft((prev) => Math.max(0, prev - 1));
      }
    }, 45000);

    return () => clearInterval(scarcityTimer);
  }, [earlyBirdTicketsLeft]);

  const pricingTiers = [
    {
      id: "early-bird",
      name: "Early Bird",
      originalPrice: 899,
      price: 599,
      savings: 300,
      badge: "Limited Time",
      badgeColor: "bg-accent text-black",
      popular: true,
      description:
        "Perfect for individual professionals looking to advance their careers",
      features: [
        "Access to all 3 days of sessions",
        "Networking events and mixers",
        "Conference materials and swag",
        "Lunch and refreshments included",
        "Digital session recordings (30 days)",
        "Access to attendee mobile app",
        "Certificate of attendance",
        "Early access to speaker slides",
      ],
      testimonial: {
        text: "The early bird ticket was the best investment I made for my career. The networking alone was worth 10x the price.",
        author: "Samuel Johnson, Senior Developer at Microsoft",
      },
      cta: "Claim Early Bird Price",
      urgency: `Only ${earlyBirdTicketsLeft} left at this price!`,
    },
    {
      id: "regular",
      name: "Regular",
      originalPrice: null,
      price: 899,
      savings: null,
      badge: "Most Popular",
      badgeColor: "bg-primary text-white",
      popular: false,
      description:
        "Complete conference experience with all sessions and networking",
      features: [
        "Access to all 3 days of sessions",
        "Networking events and mixers",
        "Conference materials and swag",
        "Lunch and refreshments included",
        "Digital session recordings (30 days)",
        "Access to attendee mobile app",
        "Certificate of attendance",
        "Priority seating in sessions",
      ],
      testimonial: {
        text: "Great value for the quality of speakers and content. I learned more in 3 days than in months of online courses.",
        author: "Mike Chen, Product Manager at Stripe",
      },
      cta: "Get Regular Ticket",
      urgency: null,
    },
    {
      id: "vip",
      name: "VIP Experience",
      originalPrice: null,
      price: 1499,
      savings: null,
      badge: "Premium",
      badgeColor: "bg-secondary text-white",
      popular: false,
      description:
        "Ultimate conference experience with exclusive access and perks",
      features: [
        "Everything in Regular ticket",
        "VIP lounge access with premium catering",
        "Reserved front-row seating",
        "Exclusive VIP networking dinner",
        "One-on-one mentorship session (30 min)",
        "Direct access to speakers after sessions",
        "Premium conference swag bag",
        "Lifetime access to session recordings",
        "Priority booking for future events",
        "Complimentary professional headshots",
      ],
      testimonial: {
        text: "The VIP experience opened doors I never expected. The mentorship session alone changed my career trajectory.",
        author: "Liam Park, CTO at TechStart",
      },
      cta: "Upgrade to VIP",
      urgency: "Only 25 VIP spots available",
    },
  ];

  const handleSelectTier = (tierId) => {
    setSelectedTier(tierId);
  };

  const handlePurchase = (tier) => {
    // In a real app, this would integrate with payment processing
    alert(`Redirecting to checkout for ${tier?.name} ticket ($${tier?.price})`);
  };

  const calculateSavings = (tier) => {
    if (tier?.id === "early-bird") {
      return tier?.savings;
    }
    return null;
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in your professional growth with access to industry leaders,
            cutting-edge insights, and career-changing networking opportunities.
          </p>
        </div>

        {/* Early Bird Countdown */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-headline-bold text-white mb-4">
            🔥 Early Bird Special Ends Soon!
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-4">
            {[
              { label: "Days", value: earlyBirdTimeLeft?.days },
              { label: "Hours", value: earlyBirdTimeLeft?.hours },
              { label: "Minutes", value: earlyBirdTimeLeft?.minutes },
              { label: "Seconds", value: earlyBirdTimeLeft?.seconds },
            ]?.map((item, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-headline-bold text-white">
                  {item?.value?.toString()?.padStart(2, "0")}
                </div>
                <div className="text-xs text-white/80">{item?.label}</div>
              </div>
            ))}
          </div>
          <p className="text-white/90">
            Save $300 and secure your spot at the premier tech conference
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers?.map((tier) => (
            <div
              key={tier?.id}
              className={`relative bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card hover:transform hover:-translate-y-2 ${
                tier?.popular
                  ? "border-accent shadow-cta scale-105"
                  : selectedTier === tier?.id
                  ? "border-accent/50"
                  : "border-border hover:border-accent/30"
              }`}
            >
              {/* Badge */}
              {tier?.badge && (
                <div
                  className={`absolute top-4 right-4 ${tier?.badgeColor} px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {tier?.badge}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-headline-bold text-foreground mb-2">
                    {tier?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tier?.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    {tier?.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${tier?.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-headline-bold text-foreground">
                      ${tier?.price}
                    </span>
                  </div>
                  {tier?.savings && (
                    <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-sm font-medium">
                      <Icon name="TrendingDown" size={14} />
                      Save ${tier?.savings}
                    </div>
                  )}
                  {tier?.urgency && (
                    <p className="text-sm text-warning mt-2 font-medium">
                      {tier?.urgency}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {tier?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="mb-8 p-4 bg-surface/50 rounded-xl">
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{tier?.testimonial?.text}"
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    — {tier?.testimonial?.author}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  variant={tier?.popular ? "default" : "outline"}
                  size="lg"
                  fullWidth
                  className={tier?.popular ? "shadow-cta animate-glow" : ""}
                  iconName="CreditCard"
                  iconPosition="left"
                  onClick={() => handlePurchase(tier)}
                >
                  {tier?.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Calculator */}
        <div className="bg-surface/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline-bold text-foreground mb-4">
              Calculate Your ROI
            </h3>
            <p className="text-muted-foreground">
              See how TechVision 2025 pays for itself through career advancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h4 className="font-headline-bold text-foreground mb-2">
                Average Salary Increase
              </h4>
              <p className="text-3xl font-headline-bold text-accent mb-2">
                23%
              </p>
              <p className="text-sm text-muted-foreground">
                Within 12 months of attending
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Network" size={32} className="text-white" />
              </div>
              <h4 className="font-headline-bold text-foreground mb-2">
                New Connections
              </h4>
              <p className="text-3xl font-headline-bold text-accent mb-2">47</p>
              <p className="text-sm text-muted-foreground">
                Average meaningful connections made
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" size={32} className="text-white" />
              </div>
              <h4 className="font-headline-bold text-foreground mb-2">
                Job Opportunities
              </h4>
              <p className="text-3xl font-headline-bold text-accent mb-2">12</p>
              <p className="text-sm text-muted-foreground">
                New opportunities discovered on average
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Quick Answers */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-xl font-headline-bold text-foreground mb-6 text-center">
            Common Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Can I upgrade my ticket later?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes, you can upgrade to VIP anytime before the event (subject to
                availability).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                What's included in the price?
              </h4>
              <p className="text-sm text-muted-foreground">
                All sessions, meals, networking events, materials, and digital
                recordings.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Is there a refund policy?
              </h4>
              <p className="text-sm text-muted-foreground">
                Full refund available up to 30 days before the event starts.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Can my company pay for multiple tickets?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes, we offer group discounts for 5+ tickets and corporate
                invoicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
