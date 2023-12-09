import React, { useState } from 'react';
import SimplePopup from './SimplePopup';

const UnlockPrice = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const buttonStyle = {
    position: 'center',
    top: '115%',
    left: '40%',
    transform: 'translate(30%, 10%)',
    fontsize: '16px',
    border: '1px solid #000',
    padding: '8px',
    paddingTop: '11px'
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="unlock-button btn btn-success" style={buttonStyle}>
        <button onClick={togglePopup}>
          <h5>Unlock Your Perfect Price!</h5>
        </button>
      </div>

      {showPopup && <SimplePopup />}
    </>
  );
};

export default UnlockPrice;
