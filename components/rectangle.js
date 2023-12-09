import React from 'react';

const Rectangle = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the start (top)
        height: '100vh', // 100% of the viewport height
      }}
    >
      <div
        style={{
          width: '900px',
          height: '300px',
          backgroundColor: 'pink',
          margin: '20px',
        }}
      >
        {/* You can add content inside the rectangle if desired */}
      </div>
    </div>
  );
};

export default Rectangle;
