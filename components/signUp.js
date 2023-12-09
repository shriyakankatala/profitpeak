import React from 'react';

const SignUp = () => {
  const buttonStyle = {
    position: 'fixed',
    top: '20px', /* Adjust the top position as needed */
    right: '20px', /* Adjust the right position as needed */
  };

  const buttonHoverStyle = {
    backgroundColor: 'black', /* Your desired hover background color */
  };

  return (
    <div>
      <div className="signup-login-button btn btn-success" style={buttonStyle}>
        <button style={{ padding: '4px', color: 'white', border: 'none', }} hoverStyle={buttonHoverStyle}>
          Sign Up / Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
