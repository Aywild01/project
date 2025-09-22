import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>NeuraBot AI</h3>
              <p>
                Building intelligent robotic systems that learn, adapt, and work
                alongside humans.
              </p>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div class="footer-column">
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="#">Industrial Robots</a>
                </li>
                <li>
                  <a href="#">Healthcare Assistants</a>
                </li>
                <li>
                  <a href="#">Research Platforms</a>
                </li>
                <li>
                  <a href="#">API & Developer Tools</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">White Papers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="copyright">
            <p>© 2023 Lusion AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer