import "./card.css";

function Card() {
  return (
    <div className="allcard">
      <div className="title">About our work</div>
      <div className="cards">
        <div className="card">
          <div className="texts">
            <div className="main">Mission</div>
            <div className="extra">
              we combine creativity and advanced technology to build AI
              solutions that make life easier. What started as a class project
              has grown into a mission to design user-friendly AI robots and
              smart web applications that solve real-world problems.
            </div>
          </div>
          <img
            src="src\assets\chi.jpg"
            alt="image of microchip"
            className="image"
          />
        </div>
        <div className="card">
          <img
            src="src\assets\cyber-brain-7633488_1280-removebg-preview.png"
            alt="image of brain"
            className="image1"
          />
          <div className="texts">
             <div className="main">My Goals</div>
            <div className="extra">
              to create technology that feels human — intelligent, reliable, and easy to use. We believe in innovation, transparency, and teamwork, values that guide everything we build.
            </div>
          </div>
        </div>
        <div className="card">
           <div className="texts">
             <div className="main">Mission</div>
            <div className="extra">
              Whether it’s automating everyday tasks, enhancing online security, or developing tools for businesses, we are committed to pushing boundaries and making AI accessible for everyone.
            </div>
        </div>
          <img
            src="src\assets\ChatGPT_Image_Sep_17__2025__11_27_22_AM-removebg-preview.png"
            alt="secure privacy and security"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
