import React from 'react';
import Image from 'next/image';

const HoverButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex p-4 items-center bg-black px-4 cursor-pointer transition duration-300 hover:bg-white hover:text-black" style={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'}}>
        <span>Contact Now</span>
      </div>
    </div>
  );
};

export default HoverButton;
