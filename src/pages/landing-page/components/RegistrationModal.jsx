import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegistrationModal = ({ isOpen, onClose, selectedTier = null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    companySize: '',
    industry: '',
    
    // Ticket Selection
    ticketType: selectedTier || 'early-bird',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    
    // Networking Preferences
    interests: [],
    networkingGoals: '',
    
    // Payment Information
    paymentMethod: 'card',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ticketOptions = [
    { value: 'early-bird', label: 'Early Bird - $599 (Save $300)', description: 'Limited time offer' },
    { value: 'regular', label: 'Regular - $899', description: 'Standard conference access' },
    { value: 'vip', label: 'VIP Experience - $1,499', description: 'Premium access and perks' }
  ];

  const companySizeOptions = [
    { value: 'startup', label: '1-10 employees' },
    { value: 'small', label: '11-50 employees' },
    { value: 'medium', label: '51-200 employees' },
    { value: 'large', label: '201-1000 employees' },
    { value: 'enterprise', label: '1000+ employees' }
  ];

  const industryOptions = [
    { value: 'software', label: 'Software Development' },
    { value: 'fintech', label: 'Financial Technology' },
    { value: 'healthcare', label: 'Healthcare Technology' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'ai-ml', label: 'AI/Machine Learning' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'blockchain', label: 'Blockchain/Crypto' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'other', label: 'Other' }
  ];

  const interestOptions = [
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'blockchain', label: 'Blockchain & Web3' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'fintech', label: 'Financial Technology' },
    { value: 'quantum', label: 'Quantum Computing' },
    { value: 'devtools', label: 'Developer Tools' },
    { value: 'startup', label: 'Startup & Entrepreneurship' },
    { value: 'leadership', label: 'Tech Leadership' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev?.interests?.includes(interest)
        ? prev?.interests?.filter(i => i !== interest)
        : [...prev?.interests, interest]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
      if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
      if (!formData?.email?.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
      if (!formData?.jobTitle?.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData?.company?.trim()) newErrors.company = 'Company is required';
    }

    if (step === 2) {
      if (!formData?.ticketType) newErrors.ticketType = 'Please select a ticket type';
    }

    if (step === 4) {
      if (!formData?.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would process payment and create registration
      alert(`Registration successful! Welcome to TechVision 2025, ${formData?.firstName}!`);
      onClose();
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (step) => {
    switch (step) {
      case 1: return 'Personal Information';
      case 2: return 'Ticket Selection';
      case 3: return 'Networking Preferences';
      case 4: return 'Payment & Confirmation';
      default: return '';
    }
  };

  const getTicketPrice = (type) => {
    switch (type) {
      case 'early-bird': return 599;
      case 'regular': return 899;
      case 'vip': return 1499;
      default: return 0;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-headline-bold text-foreground">
              Register for TechVision 2025
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Step {currentStep} of 4: {getStepTitle(currentStep)}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <Icon name="X" size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4]?.map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-gradient-primary text-white' :'bg-surface text-muted-foreground'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-surface rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  value={formData?.firstName}
                  onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                  error={errors?.firstName}
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  value={formData?.lastName}
                  onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                  error={errors?.lastName}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  error={errors?.email}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Job Title"
                  type="text"
                  value={formData?.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e?.target?.value)}
                  error={errors?.jobTitle}
                  required
                />
                <Input
                  label="Company"
                  type="text"
                  value={formData?.company}
                  onChange={(e) => handleInputChange('company', e?.target?.value)}
                  error={errors?.company}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Company Size"
                  options={companySizeOptions}
                  value={formData?.companySize}
                  onChange={(value) => handleInputChange('companySize', value)}
                />
                <Select
                  label="Industry"
                  options={industryOptions}
                  value={formData?.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                />
              </div>
            </div>
          )}

          {/* Step 2: Ticket Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Select
                label="Select Your Ticket"
                options={ticketOptions}
                value={formData?.ticketType}
                onChange={(value) => handleInputChange('ticketType', value)}
                error={errors?.ticketType}
                required
              />

              {/* Ticket Details */}
              <div className="bg-surface/30 border border-border rounded-xl p-6">
                <h3 className="font-headline-bold text-foreground mb-4">
                  Selected Ticket: {ticketOptions?.find(t => t?.value === formData?.ticketType)?.label}
                </h3>
                <div className="text-3xl font-headline-bold text-accent mb-4">
                  ${getTicketPrice(formData?.ticketType)}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Access to all 3 days of sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    All meals and networking events
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Conference materials and recordings
                  </li>
                  {formData?.ticketType === 'vip' && (
                    <>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        VIP lounge access and premium perks
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        One-on-one mentorship session
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Dietary Restrictions"
                  type="text"
                  value={formData?.dietaryRestrictions}
                  onChange={(e) => handleInputChange('dietaryRestrictions', e?.target?.value)}
                  placeholder="e.g., Vegetarian, Gluten-free, None"
                />
                <Input
                  label="Accessibility Needs"
                  type="text"
                  value={formData?.accessibilityNeeds}
                  onChange={(e) => handleInputChange('accessibilityNeeds', e?.target?.value)}
                  placeholder="Any special accommodations needed"
                />
              </div>
            </div>
          )}

          {/* Step 3: Networking Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions?.map((interest) => (
                    <Checkbox
                      key={interest?.value}
                      label={interest?.label}
                      checked={formData?.interests?.includes(interest?.value)}
                      onChange={() => handleInterestToggle(interest?.value)}
                    />
                  ))}
                </div>
              </div>

              <Input
                label="Networking Goals"
                type="text"
                value={formData?.networkingGoals}
                onChange={(e) => handleInputChange('networkingGoals', e?.target?.value)}
                placeholder="What do you hope to achieve through networking at TechVision?"
                description="This helps us suggest relevant connections and sessions"
              />

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Smart Networking</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your interests and goals, we'll suggest relevant attendees to connect with and sessions to attend. You'll receive personalized recommendations in the conference app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment & Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-surface/30 border border-border rounded-xl p-6">
                <h3 className="font-headline-bold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {ticketOptions?.find(t => t?.value === formData?.ticketType)?.label}
                    </span>
                    <span className="font-medium text-foreground">
                      ${getTicketPrice(formData?.ticketType)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span className="font-medium text-foreground">$25</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-headline-bold text-foreground">Total</span>
                    <span className="font-headline-bold text-accent text-xl">
                      ${getTicketPrice(formData?.ticketType) + 25}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 border border-border rounded-xl">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData?.paymentMethod === 'card'}
                      onChange={(e) => handleInputChange('paymentMethod', e?.target?.value)}
                      className="text-accent"
                    />
                    <Icon name="CreditCard" size={20} className="text-muted-foreground" />
                    <span className="text-foreground">Credit/Debit Card</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-border rounded-xl">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData?.paymentMethod === 'paypal'}
                      onChange={(e) => handleInputChange('paymentMethod', e?.target?.value)}
                      className="text-accent"
                    />
                    <Icon name="Wallet" size={20} className="text-muted-foreground" />
                    <span className="text-foreground">PayPal</span>
                  </div>
                </div>
              </div>

              {/* Terms and Newsletter */}
              <div className="space-y-4">
                <Checkbox
                  label="I agree to the Terms and Conditions and Privacy Policy"
                  checked={formData?.agreeToTerms}
                  onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
                  error={errors?.agreeToTerms}
                  required
                />
                <Checkbox
                  label="Subscribe to TechVision newsletter for updates and exclusive content"
                  checked={formData?.subscribeNewsletter}
                  onChange={(e) => handleInputChange('subscribeNewsletter', e?.target?.checked)}
                />
              </div>

              {/* Security Notice */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Secure Payment</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex items-center gap-4">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrevStep}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {currentStep < 4 ? (
              <Button
                variant="default"
                onClick={handleNextStep}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleSubmit}
                loading={isSubmitting}
                iconName="CreditCard"
                iconPosition="left"
                className="shadow-cta"
              >
                Complete Registration
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;