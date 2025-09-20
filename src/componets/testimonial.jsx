import './testimonial.css'
import React, { useState } from "react";

const testimonials = [
  {
    name: "John D.",
    role: "Product Manager",
    text: "This AI robot changed how I manage my daily tasks! It streamlined my workflow and saved me hours every week.",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    name: "Sarah W.",
    role: "Software Engineer",
    text: "Incredible tool that transformed our team's productivity. The automation features are game-changing for development workflows.",
    avatar: "https://i.pravatar.cc/80?img=2",
  },
  {
    name: "Michael T.",
    role: "Marketing Director",
    text: "We've seen a 40% increase in campaign efficiency since implementing this solution. The insights and automation are invaluable.",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    name: "Lisa C.",
    role: "Startup Founder",
    text: "As an early adopter, I've watched this product evolve into an essential tool for any growing business. The support team is exceptional.",
    avatar: "https://i.pravatar.cc/80?img=4",
  },
];

const additionalTestimonials = [
  {
    name: "Alex R.",
    role: "Tech CEO",
    text: "The customer support team went above and beyond to help us implement this solution.",
    avatar: "https://i.pravatar.cc/64?img=5",
  },
  {
    name: "Maria L.",
    role: "Data Analyst",
    text: "The reporting features have given us insights we never thought possible. Highly recommend!",
    avatar: "https://i.pravatar.cc/64?img=6",
  },
  {
    name: "David K.",
    role: "Operations Manager",
    text: "Streamlined our processes and eliminated hundreds of hours of manual work monthly.",
    avatar: "https://i.pravatar.cc/64?img=7",
  },
  {
    name: "Emily Z.",
    role: "UX Designer",
    text: "The intuitive interface makes complex tasks simple. A pleasure to use every day.",
    avatar: "https://i.pravatar.cc/64?img=8",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
    
      <section className="testimonials-section" aria-label="Customer testimonials">
        <h2 className="testimonials-title">What Our Customers Say</h2>

        {/* Main Carousel */}
        <div className="carousel">
          <img
            src={testimonials[current].avatar}
            alt={`Portrait of ${testimonials[current].name}`}
            className="avatar"
            loading="lazy"
          />
          <blockquote>"{testimonials[current].text}"</blockquote>
          <div className="testimonial-name">{testimonials[current].name}</div>
          <div className="testimonial-role">{testimonials[current].role}</div>

          <div className="carousel-controls">
            <button
              onClick={prevTestimonial}
              className="control-button"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="dots" role="tablist" aria-label="Select testimonial">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === current ? "active" : ""}`}
                  onClick={() => setCurrent(idx)}
                  aria-selected={idx === current}
                  role="tab"
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="control-button"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="additional-testimonials" aria-label="Additional customer testimonials">
          {additionalTestimonials.map(({ name, role, text, avatar }, idx) => (
            <article key={idx} className="testimonial-card">
              <header className="testimonial-card-header">
                <img
                  src={avatar}
                  alt={`Portrait of ${name}`}
                  className="testimonial-card-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="testimonial-card-name">{name}</div>
                  <div className="testimonial-card-role">{role}</div>
                </div>
              </header>
              <p className="testimonial-card-text">"{text}"</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;