import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VenueSection = () => {
  const [selectedAmenity, setSelectedAmenity] = useState('networking');

  const venueInfo = {
    name: "San Francisco Convention Center",
    address: "747 Howard St, San Francisco, CA 94103",
    coordinates: { lat: 37.7849, lng: -122.4094 },
    description: "Located in the heart of San Francisco's SOMA district, our venue offers state-of-the-art facilities with stunning city views and easy access to the tech hub."
  };

  const amenities = {
    networking: {
      title: "Networking Spaces",
      description: "Dedicated areas designed for meaningful connections with comfortable seating, charging stations, and ambient lighting.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      features: [
        "5 dedicated networking lounges",
        "Outdoor terrace with city views",
        "Quiet zones for focused conversations",
        "Mobile charging stations throughout"
      ]
    },
    demo: {
      title: "Demo Areas",
      description: "Interactive spaces where sponsors and speakers showcase cutting-edge technologies and innovations.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      features: [
        "20+ interactive demo stations",
        "VR/AR experience zones",
        "Hands-on coding workshops",
        "Latest tech product showcases"
      ]
    },
    catering: {
      title: "Premium Catering",
      description: "Gourmet meals and refreshments throughout the day, accommodating all dietary preferences and restrictions.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
      features: [
        "Breakfast, lunch, and dinner included",
        "Specialty coffee and tea stations",
        "Dietary accommodations available",
        "Local San Francisco cuisine featured"
      ]
    },
    facilities: {
      title: "Modern Facilities",
      description: "State-of-the-art conference facilities with the latest AV technology and comfortable seating for all attendees.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: [
        "1,200-seat main auditorium",
        "8 breakout rooms (50-400 capacity)",
        "High-speed WiFi throughout",
        "Live streaming capabilities"
      ]
    }
  };

  const transportation = [
    {
      type: "BART",
      description: "Powell St Station - 0.3 miles walk",
      icon: "Train",
      time: "5 min walk"
    },
    {
      type: "Parking",
      description: "Multiple parking garages within 2 blocks",
      icon: "Car",
      time: "$25/day"
    },
    {
      type: "Rideshare",
      description: "Uber/Lyft pickup zone on Howard St",
      icon: "Navigation",
      time: "Convenient"
    },
    {
      type: "Airport",
      description: "SFO Airport - 30 minutes via BART",
      icon: "Plane",
      time: "30 min"
    }
  ];

  const nearbyHotels = [
    {
      name: "The St. Regis San Francisco",
      distance: "0.2 miles",
      rating: 4.8,
      price: "$450/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["Luxury", "Spa", "Restaurant"],
      bookingUrl: "#"
    },
    {
      name: "Hotel Zephyr San Francisco",
      distance: "0.8 miles",
      rating: 4.5,
      price: "$280/night",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      amenities: ["Waterfront", "Unique Design", "Restaurant"],
      bookingUrl: "#"
    },
    {
      name: "Hyatt Regency San Francisco",
      distance: "0.5 miles",
      rating: 4.3,
      price: "$320/night",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      amenities: ["Business Center", "Fitness", "Views"],
      bookingUrl: "#"
    }
  ];

  const handleBookHotel = (hotel) => {
    // In a real app, this would redirect to booking platform
    alert(`Redirecting to book ${hotel?.name}`);
  };

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venueInfo?.coordinates?.lat},${venueInfo?.coordinates?.lng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <section id="venue" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline-bold text-foreground mb-6">
            World-Class <span className="text-gradient-primary">Venue</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience TechVision 2025 in San Francisco's premier conference facility, 
            designed for networking, learning, and innovation.
          </p>
        </div>

        {/* Venue Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-96 relative">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={venueInfo?.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${venueInfo?.coordinates?.lat},${venueInfo?.coordinates?.lng}&z=15&output=embed`}
                className="border-0"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-headline-bold text-foreground mb-2">
                {venueInfo?.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {venueInfo?.address}
              </p>
              <Button 
                variant="outline" 
                fullWidth
                iconName="Navigation"
                iconPosition="left"
                onClick={handleGetDirections}
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Venue Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-headline-bold text-foreground mb-4">
                Perfect Location in SOMA
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {venueInfo?.description}
              </p>
            </div>

            {/* Transportation Options */}
            <div className="mb-8">
              <h4 className="text-lg font-headline-bold text-foreground mb-4">
                Getting There
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {transportation?.map((option, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={option?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">{option?.type}</h5>
                      <p className="text-sm text-muted-foreground">{option?.description}</p>
                      <span className="text-xs text-accent font-medium">{option?.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline-bold text-foreground mb-4">
              Venue Amenities
            </h3>
            <p className="text-muted-foreground">
              Everything you need for a productive and comfortable conference experience
            </p>
          </div>

          {/* Amenity Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(amenities)?.map(([key, amenity]) => (
              <button
                key={key}
                onClick={() => setSelectedAmenity(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedAmenity === key
                    ? 'bg-gradient-primary text-white shadow-cta'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50'
                }`}
              >
                {amenity?.title}
              </button>
            ))}
          </div>

          {/* Selected Amenity Details */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <Image 
                  src={amenities?.[selectedAmenity]?.image}
                  alt={amenities?.[selectedAmenity]?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-headline-bold text-foreground mb-4">
                  {amenities?.[selectedAmenity]?.title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {amenities?.[selectedAmenity]?.description}
                </p>
                <ul className="space-y-3">
                  {amenities?.[selectedAmenity]?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Hotels */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline-bold text-foreground mb-4">
              Recommended Hotels
            </h3>
            <p className="text-muted-foreground">
              Stay close to the action with these carefully selected accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nearbyHotels?.map((hotel, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-card">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={hotel?.image}
                    alt={hotel?.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-headline-bold text-foreground">{hotel?.name}</h4>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-muted-foreground">{hotel?.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="MapPin" size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{hotel?.distance} from venue</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel?.amenities?.map((amenity, amenityIndex) => (
                      <span 
                        key={amenityIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-headline-bold text-foreground">
                      {hotel?.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleBookHotel(hotel)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8">
            <h3 className="text-2xl font-headline-bold text-white mb-4">
              Ready to Experience TechVision 2025?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join us in San Francisco for three days of innovation, networking, 
              and career-changing opportunities.
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
              Secure Your Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;