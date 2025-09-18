import "./card.css";

function Card() {
  return (
    <div className="allcard">
      <div className="title">About our work</div>
      <div className="cards">
        <div className="card">
          <img
            src="src\assets\electronics-3373109_1280-removebg-preview.png"
            alt="image of microchip"
            className="image"
          />
          <div className="circle">
            <div className="incircle"></div>
          </div>
          <div className="circle2">
            <div className="incircle"></div>
          </div>
        </div>
        <div className="card">
          <img
            src="src\assets\cyber-brain-7633488_1280-removebg-preview.png"
            alt="image of brain"
            className="image1"
          />
          <div className="circle">
            <div className="incircle"></div>
          </div>
          <div className="circle2">
            <div className="incircle"></div>
          </div>
        </div>
        <div className="card">
          <img
            src="src\assets\ChatGPT_Image_Sep_17__2025__11_27_22_AM-removebg-preview.png"
            alt="secure privacy and security"
            className="image"
          />
          <div className="circle">
            <div className="incircle"></div>
          </div>
          <div className="circle2">
            <div className="incircle"></div>
          </div>
        </div>
      </div>
      <div className="story">
        <p>
          NeuraBot isn’t just a robot — it’s a reliable companion built on
          privacy, intelligence, and trust.
        </p>
      </div>
    </div>
  );
}
export default Card;
