import '../componets/valur.css'

function Value() {
    return(
        <div>
            <section class="values">
        <div class="container">
            <div class="section-title">
                <h2>Our Values</h2>
                <p>These core principles guide everything we do at NexTech and shape our company culture.</p>
            </div>
            <div class="values-grid">
                <div class="value-card">
                    <div class="value-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="value-title">Innovation</h3>
                    <p class="value-desc">We constantly push boundaries and explore new possibilities to deliver
                        cutting-edge solutions.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="value-title">Collaboration</h3>
                    <p class="value-desc">We believe that the best results come from diverse teams working together
                        toward common goals.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="value-title">Integrity</h3>
                    <p class="value-desc">We operate with honesty and transparency, building trust with our clients and
                        partners.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <h3 class="value-title">Excellence</h3>
                    <p class="value-desc">We strive for the highest quality in everything we do, from code to customer
                        service.</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Value