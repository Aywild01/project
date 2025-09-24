import './confaq.css'
import React, { useEffect } from "react";

function Confaq() {
  useEffect(() => {
    // Accordion toggle
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        const icon = header.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
      });
    });

    // Contact form submit
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! Our AI team will contact you soon.');
        this.reset();
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      document.querySelectorAll('.accordion-header').forEach(header => {
        header.replaceWith(header.cloneNode(true));
      });
      if (form) {
        form.replaceWith(form.cloneNode(true));
      }
    };
  }, []);
    return (
    <div>
      <section class="faq">
        <div class="container">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="accordion">
            <div class="accordion-item">
              <div class="accordion-header">
                What industries do your AI robots serve?{" "}
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="accordion-content">
                <p>
                  Our AI robotics solutions are versatile and serve multiple
                  industries including manufacturing, healthcare, logistics,
                  retail, and agriculture. We customize our robots to meet
                  specific industry needs.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header">
                How does your AI technology learn and adapt?{" "}
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="accordion-content">
                <p>
                  Our robots use advanced machine learning algorithms that allow
                  them to learn from data, recognize patterns, and improve their
                  performance over time without explicit programming for every
                  scenario.
                </p>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header">
                What kind of support do you provide after purchase?{" "}
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="accordion-content">
                <p>
                  We offer comprehensive support including installation,
                  training, maintenance, and 24/7 technical assistance. Our team
                  ensures a smooth integration process and ongoing optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Confaq;
