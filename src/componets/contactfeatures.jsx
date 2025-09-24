import './contactfeatures.css'

function featured() {
  return (
    <div>
      <section class="featureds">
        <div class="container">
          <h2 class="section-title">Why Choose Our AI Robots</h2>
          <div class="featureds-grid">
            <div class="featured-card">
              <div class="featured-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>Advanced AI</h3>
              <p>
                Our robots featured the latest in machine learning and neural
                network technology for adaptive problem-solving.
              </p>
            </div>
            <div class="featured-card">
              <div class="featured-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3>High Performance</h3>
              <p>
                Engineered for speed and precision, our robotics solutions
                outperform traditional automation systems.
              </p>
            </div>
            <div class="featured-card">
              <div class="featured-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Secure & Reliable</h3>
              <p>
                Built with multiple layers of security to ensure your data and
                operations remain protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default featured;
