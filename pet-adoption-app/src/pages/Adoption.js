import React, { useState } from 'react';
import { usePetContext } from '../context/PetContext';

const Adoption = () => {
  const { selectedPet } = usePetContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: 'var(--primary)',
          fontSize: '2rem'
        }}>
          Adoption Application
        </h2>

        {selectedPet && (
          <div style={{
            marginBottom: '2rem',
            padding: '1rem',
            backgroundColor: 'var(--gray-100)',
            borderRadius: '0.5rem',
            border: '1px solid var(--primary)'
          }}>
            <p style={{ color: 'var(--primary)' }}>
              You are applying to adopt: <span style={{ fontWeight: 'bold' }}>{selectedPet.name}</span>
            </p>
          </div>
        )}

        {submitSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{
              margin: '0 auto',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'var(--success)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              ✓
            </div>
            <h3 style={{ 
              marginTop: '1rem',
              fontSize: '1.25rem',
              color: 'var(--primary)'
            }}>
              Application Submitted!
            </h3>
            <p style={{ 
              marginTop: '0.5rem',
              color: 'var(--gray-500)'
            }}>
              Thank you for your interest in adoption. We will review your application and contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.firstName ? 'var(--error)' : 'var(--gray-300)'
                  }}
                />
                {errors.firstName && (
                  <p className="error-message" style={{ color: 'var(--error)', marginTop: '0.5rem' }}>
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.lastName ? 'var(--error)' : 'var(--gray-300)'
                  }}
                />
                {errors.lastName && (
                  <p className="error-message" style={{ color: 'var(--error)', marginTop: '0.5rem' }}>
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  borderColor: errors.email ? 'var(--error)' : 'var(--gray-300)'
                }}
              />
              {errors.email && (
                <p className="error-message" style={{ color: 'var(--error)', marginTop: '0.5rem' }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  borderColor: errors.phone ? 'var(--error)' : 'var(--gray-300)'
                }}
              />
              {errors.phone && (
                <p className="error-message" style={{ color: 'var(--error)', marginTop: '0.5rem' }}>
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <textarea
                name="address"
                id="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                style={{
                  borderColor: errors.address ? 'var(--error)' : 'var(--gray-300)'
                }}
              />
              {errors.address && (
                <p className="error-message" style={{ color: 'var(--error)', marginTop: '0.5rem' }}>
                  {errors.address}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Why do you want to adopt this pet?</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {errors.submit && (
              <div style={{ 
                color: 'var(--error)',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
              }}>
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ 
                width: '100%',
                opacity: isSubmitting ? '0.7' : '1',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                padding: '1rem'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Adoption;
