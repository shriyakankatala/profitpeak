import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const SimplePopup = () => {
  const initialStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    popup: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    closeButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      position: 'absolute',
      top: '10px',
      right: '10px',
    }
  }
  
  const [styles, setStyles] = useState(initialStyles);

  const clickX = (event) => {
    setStyles({
      ...styles,
      overlay: {
        ...styles.overlay,
        display: "none" 
      }
    });
  };

  return (
    <div style={styles.overlay}>
      <div className=" d-flex justify-content-center" style={styles.popup}>
        <h3 className=''>Your Perfect Price Is: </h3>
        <h3 className=''>&nbsp; $43.75</h3>
        <button style={styles.closeButton} onClick={clickX}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default SimplePopup;
