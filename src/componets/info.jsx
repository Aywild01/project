import './info.css'
import { useState } from "react";
import { useEffect } from "react";


function InfoCard() {
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    console.log(`Details are now ${showDetails ? 'visible' : 'hidden'}`);
  }, [showDetails]);
  const Details = () => {
    setShowDetails(prev => !prev);
  };
  return (
    <div className='card'>
      <div className='header'>
        <h2>Card Title</h2>
        <button onClick={Details} className='iconButton' aria-label="Toggle details">
          {showDetails ? '▲' : '▼'}
        </button>
      </div>
      {showDetails && (
        <div className='details'>
             <p>This is the detailed information shown when you click the icon.</p>
          <p>You can put any content here.</p>
        </div>
      )}
    </div>
  );
}
export default InfoCard