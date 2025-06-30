import React, { useState, useEffect } from 'react';
import './index.css';
import Check from '../src/images/check.svg';

// SuccessBooked Component
export const SuccessBooked = ({ isVisible }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 500); // Delay the visibility change to allow the fade effect
    }
  }, [isVisible]);

  return (
    <>
      {visible && (
        <section
          className={`z-50 fixed top-[calc(50%-10vh)] left-[calc(50%-15vw)]  h-[20vh] w-[30vw] bg-white shadow-lg rounded-lg flex items-center justify-center ${
            isVisible ? 'slide-in' : 'fade-out'
          }`}
        >
          <div className="flex items-center">
            <img
              src={Check}
              alt="Check"
              className="w-10 h-10 object-contain mr-3 rounded-lg"
              draggable="false"
            />
            <h1 className="text-lg font-bold text-gray-700">Successfully Booked!</h1>
          </div>
        </section>
      )}
    </>
  );
};
