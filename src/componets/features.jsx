import "./fatures.css";

function Feature() {
  return (
    <div className="allcardo">
      <div className="titlet">features and benefits</div>
      <div className="cardso">
        <div className="cardo">
          <div className="cardoHead">
            <img src="src\assets\interprete.png" alt="voice recognition" className="images"/>
          </div>
          <div className="cardoBody">
            <p>Voice Recognition</p>
            <p>Understands and reapond to all languagues</p>
          </div>
        </div>
        <div className="cardo">
          <div className="cardoHead">
            <img src="src\assets\interactions.png" alt="human interaction" className="images" />
          </div>
          <div className="cardoBody">
            <p>Human Interaction</p>
            <p>Engage with users in a friendly manner</p>
          </div>
        </div>
        <div className="cardo">
          <div className="cardoHead">
            <img src="src\assets\location.png" alt="smart navigation" className="images"/>
          </div>
          <div className="cardoBody">
            <p>Smart Navigation</p>
            <p>Navigate and avid obstacles efficiently</p>
          </div>
        </div>
        <div className="cardo">
          <div className="cardoHead">
            <img src="src\assets\shield.png" alt="privacy" className="images1"/>
          </div>
          <div className="cardoBody">
            <p>Learnimg Capabilities</p>
            <p>Adapts and improve through learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feature;
