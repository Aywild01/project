import '../componets/story.css'

function Story(){
    return(
        <div>
            <section class="about">
        <div class="container">
            <div class="section-title">
                <h2>Our Story</h2>
                <p>Founded in 2015, NexTech has been at the forefront of technological innovation for nearly a decade.
                </p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>From a small startup to industry leaders</h3>
                    <p>What started as a small team of passionate developers has grown into a multidisciplinary
                        organization with global reach. Our journey began with a simple mission: to make advanced
                        technology accessible and beneficial for everyone.</p>
                    <p>Today, we partner with Fortune 500 companies and startups alike, delivering solutions that
                        transform businesses and create new possibilities.</p>

                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number">8+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">250+</div>
                            <div class="stat-label">Clients Worldwide</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">40+</div>
                            <div class="stat-label">Team Members</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">Awards Won</div>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="src\assets\Screenshot_20250923-091235_1.png"
                        alt="Modern tech office with team collaboration" />
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Story