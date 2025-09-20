import './App.css'
import Scene from '../src/componets/background'
import Header from "./componets/header";
import HeroText from "./componets/heading";
import Card from "./componets/card";
import Feature from "./componets/features";
import Testimonial from "./componets/testimonial";
import AboutUs from './componets/aboutus';
import Footer from "./componets/footer";
import about_us from "./assets/about.jpg"
import AboutHero from './componets/about_hero';
import dd from './assets/dd.jpg'
import 'animate.css';


function App() {

  let about_ = [{
    badge: 'Why Us',
    title: "Home care software <br /> that works as <br /> hard as you do.",
    descroiption:"we believe the future of technology is not just about machines — it’s about creating intelligent companions that improve the way we live, work, and connect.",
    image: about_us
  },
{
    badge: 'Our vision',
    title: "Design AI robots <br /> that are more than tools",
    descroiption:"They are adaptive, interactive, and secure partners, capable of understanding human needs and evolving with them. With advanced voice recognition, smart navigation, and continuous learning capabilities, our robots bring futuristic innovation into everyday life.",
    image: dd
  }]
  
  return (
    <div className='heroSection'>
      <Header />
      <Scene />
      <HeroText />
      {/* <Card />
      <Feature />
      <p>lfjiiuiwvuiwvu</p> */}

      <div className="about_section">

        <div className="ring">

        </div>
         <div className="ring2">
          
        </div>
       <AboutHero />
      {
        about_.map((item , i)=>{
          return  <AboutUs isReverse={i%2 === 0?false:true} title={item.title} description={item.descroiption} image={item.image} badge={item.badge} />
        })
      }  
      </div>
  
     <Testimonial />
     <Footer />
    </div>
  )
}

export default App
