import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePetContext } from '../context/PetContext';
import { useAdoptedPet } from '../context/AdoptedPetContext';
import AdoptionSteps from '../components/AdoptionSteps';
import PetPreviewCard from '../components/PetPreviewCard';

const Adoption = () => {
  const navigate = useNavigate();
  const { selectedPet } = usePetContext();
  const { adoptPet } = useAdoptedPet();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    experience: '',
    homeType: '',
    hasYard: false,
    otherPets: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Create and preload bark sound
  const barkSound = new Audio('https://cdn.freesound.org/previews/316/316920_5123851-lq.mp3');
  barkSound.volume = 0.4;
  barkSound.load();

  const playBark = async () => {
    try {
      barkSound.currentTime = 0;
      const playPromise = barkSound.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  const validateStep = () => {
    const newErrors = {};
    switch (currentStep) {
      case 0:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        break;
      case 1:
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
          newErrors.phone = 'Phone number must be 10 digits';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        break;
      case 2:
        if (!formData.experience) newErrors.experience = 'Please select your experience level';
        if (!formData.homeType) newErrors.homeType = 'Please select your home type';
        break;
      default:
        break;
    }
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep();
    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateStep();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      await playBark();

      const adoptedPet = adoptPet(selectedPet, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        experience: formData.experience,
        homeType: formData.homeType,
        hasYard: formData.hasYard,
        otherPets: formData.otherPets
      });

      setSubmitSuccess(true);

      setTimeout(() => {
        navigate(`/my-pet/${adoptedPet.id}`);
      }, 2000);

    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedPet) {
    return (
      <div style={{ 
        padding: '4rem 1rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: '#4b47d6',
          marginBottom: '1.5rem'
        }}>
          No Pet Selected
        </h2>
        <p style={{
          color: '#666',
          marginBottom: '2rem'
        }}>
          Please select a pet from our available pets page to begin the adoption process.
        </p>
        <button
          onClick={() => navigate('/pets')}
          style={{
            backgroundColor: '#6c63ff',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          View Available Pets
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#4b47d6',
          fontSize: '2rem'
        }}>
          Adoption Application
        </h2>

        <PetPreviewCard pet={selectedPet} />
        <AdoptionSteps currentStep={currentStep} />

        {submitSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{
              margin: '0 auto',
              width: '3rem',
              height: '3rem',
              backgroundColor: '#4CAF50',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              ✓
            </div>
            <h3 style={{ 
              marginTop: '1rem',
              fontSize: '1.25rem',
              color: '#4b47d6'
            }}>
              Congratulations! Adoption Successful!
            </h3>
            <p style={{ 
              marginTop: '0.5rem',
              color: '#666'
            }}>
              Redirecting you to your new pet's page...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {currentStep === 0 && (
              <>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem'
                }}>
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <i className="fas fa-user" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${errors.firstName ? '#f44336' : '#ddd'}`,
                        fontSize: '1rem'
                      }}
                    />
                    {errors.firstName && (
                      <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      <i className="fas fa-user" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${errors.lastName ? '#f44336' : '#ddd'}`,
                        fontSize: '1rem'
                      }}
                    />
                    {errors.lastName && (
                      <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${errors.email ? '#f44336' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fas fa-phone" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${errors.phone ? '#f44336' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.phone && (
                    <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i className="fas fa-home" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Address *
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${errors.address ? '#f44336' : '#ddd'}`,
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                  {errors.address && (
                    <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      {errors.address}
                    </p>
                  )}
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="form-group">
                  <label htmlFor="experience">
                    <i className="fas fa-star" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Pet Care Experience *
                  </label>
                  <select
                    name="experience"
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${errors.experience ? '#f44336' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select your experience level</option>
                    <option value="first">First-time pet owner</option>
                    <option value="some">Some experience</option>
                    <option value="experienced">Experienced pet owner</option>
                  </select>
                  {errors.experience && (
                    <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      {errors.experience}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="homeType">
                    <i className="fas fa-building" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Home Type *
                  </label>
                  <select
                    name="homeType"
                    id="homeType"
                    value={formData.homeType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${errors.homeType ? '#f44336' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select your home type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                  </select>
                  {errors.homeType && (
                    <p style={{ color: '#f44336', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      {errors.homeType}
                    </p>
                  )}
                </div>

                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    name="hasYard"
                    id="hasYard"
                    checked={formData.hasYard}
                    onChange={handleChange}
                  />
                  <label htmlFor="hasYard">
                    <i className="fas fa-tree" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                    Do you have a yard?
                  </label>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment" style={{ marginRight: '0.5rem', color: '#6c63ff' }}></i>
                  Why do you want to adopt {selectedPet.name}?
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            )}

            {errors.submit && (
              <div style={{ 
                color: '#f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
              }}>
                {errors.submit}
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #6c63ff',
                    backgroundColor: 'white',
                    color: '#6c63ff',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  Back
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#6c63ff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Next
                  <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: isSubmitting ? '#ccc' : '#6c63ff',
                    color: 'white',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-heart"></i>
                      Complete Adoption
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Adoption;
