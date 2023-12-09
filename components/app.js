import React from 'react';
import ImageButton from './ImageButton';

function App() {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  // Specify the path to the image in your downloads
  const imageUrl = './uploadPicButton.jpg';

  return (
    <div>
      <ImageButton imageUrl={imageUrl} onClick={handleButtonClick} />
    </div>
  );
}

export default App;
