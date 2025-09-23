import "./contactbanner.css";

function ContactBanner() {
  return (
    <div className="contact-banner">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Ready to Get Started?</h2>
          <p className="contact-description">
            Let's discuss your project and bring your robotic vision to life. 
            Get in touch with our team of experts today.
          </p>
          <div className="contact-buttons">
            <a href="mailto:contact@fiti.com" className="contact-btn primary">
              Contact Us
            </a>
            <a href="tel:+1234567890" className="contact-btn secondary">
              Call Now
            </a>
          </div>
        </div>
        <div className="contact-visual">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
