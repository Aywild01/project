import './App.css'
import Scene from '../src/componets/background'
import Header from "./componets/header";
import HeroText from "./componets/heading";
import Card from "./componets/card";
import Feature from "./componets/features";
import AboutUs from './componets/aboutus';

import about_us from "./assets/about.jpg"
import AboutHero from './componets/about_hero';
import dd from './assets/dd.jpg'
import 'animate.css';


function App() {

  let about_ = [{
    badge: 'Why Us',
    title: "Home care software <br /> that works as <br /> hard as you do.",
    descroiption:"Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Sint voluptas id dicta.",
    image: about_us
  },
{
    badge: 'Why Us',
    title: "Home care software <br /> that works as <br /> hard as you do.",
    descroiption:"Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Sint voluptas id dicta.",
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
  
     
    </div>
  )
}

export default App
