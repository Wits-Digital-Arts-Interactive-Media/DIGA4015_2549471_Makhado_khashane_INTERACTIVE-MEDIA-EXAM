import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Find your perfect companion today</h1>
          <p>
            Discover loving pets waiting for their forever homes. Our adoption process is simple, and our team is here to help you every step of the way.
          </p>
          <div>
            <Link to="/pets" className="btn btn-primary">
              View Available Pets
            </Link>
            <Link to="/adoption" className="btn btn-secondary">
              Start Adoption
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card">
          <h2>Why Choose Us</h2>
          <p>
            We make the adoption process simple and rewarding for both you and your future pet.
          </p>
          <div className="grid">
            {[
              {
                title: "Verified Pets",
                description: "All our pets are health-checked and temperament-tested to ensure they're ready for their new homes"
              },
              {
                title: "Support System",
                description: "Our team of experts is here to guide you through the adoption process and answer any questions."
              },
              {
                title: "Easy Process",
                description: "Simple, straightforward adoption process with all necessary support and documentation."
              },
              {
                title: "Follow-up Care",
                description: "We provide post-adoption support and check-ins to ensure a smooth transition."
              }
            ].map((feature, index) => (
              <div key={index} className="card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
