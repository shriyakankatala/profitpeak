import React, { useState } from 'react';

function HoursBox() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the state with the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="form-group row">
      
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Hours</label>
        <div className="col-sm-10">
          <input 
            // type="number"
            className="form-control" 
            id="colFormLabel" 
            placeholder="Enter hours"
            value={inputValue} 
            onChange={handleInputChange}
          />
          
        </div>
      </div>
    </div>
  );
}

export default HoursBox;
