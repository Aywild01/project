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
    <>
      <style>{`
        .testimonials-section {
          padding: 4rem 1rem;
          background-color: #f9fafb;
          color: #111827;
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonials-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }
        .carousel {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }
        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #3b82f6;
          margin: 0 auto 1.5rem;
          display: block;
        }
        blockquote {
          font-style: italic;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #374151;
        }
        .testimonial-name {
          font-weight: 700;
          font-size: 1.125rem;
          color: #2563eb;
          text-align: center;
          margin-bottom: 0.25rem;
        }
        .testimonial-role {
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
        }
        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1.5rem;
          gap: 1rem;
        }
        .control-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .control-button:hover {
          background-color: #bfdbfe;
        }
        .dots {
          display: flex;
          gap: 0.5rem;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .dot.active {
          background-color: #2563eb;
        }
        .additional-testimonials {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .testimonial-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .testimonial-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .testimonial-card-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .testimonial-card-name {
          font-weight: 700;
          font-size: 1rem;
          color: #111827;
        }
        .testimonial-card-role {
          font-size: 0.875rem;
          color: #6b7280;
        }
        .testimonial-card-text {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.4;
          flex-grow: 1;
        }
        @media (max-width: 640px) {
          .carousel {
            padding: 1.5rem;
          }
          .testimonials-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

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
    </>
  );
};

export default Testimonials;