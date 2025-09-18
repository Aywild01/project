import './heading.css'
import 'animate.css'

function HeroText(){
    return(
    <div className="hero">
        <div className="herotitle">
            <p>Pioneer the Future <br /> of AI Robotics</p>
            {/* <p>At NeuraBot AI we are building intelligent robot system that learn, <br /> adapt and work along side humans to solve complex challanges</p> */}
        </div>
        <div className="cta">
            <button className='animate_animated animate__fadeInUp'>Get Started</button>
            <button className='animate_animated animate__fadeInUp'>Explore our tech</button>
        </div>
    </div>
    )
}

export default HeroText