import './index.css';
import './customed.css';
import React, { useState } from 'react';
import { Header } from './header.js';
import { Footer } from './footer.js';
import image from '../src/images/image.png';
import axios from 'axios';
import PosterIMG1 from '../src/images/poster-1.png';
import PosterIMG2 from '../src/images/poster-2.png';
import PosterIMG3 from '../src/images/poster-3.png';
import Coach1 from '../src/images/coach-1.jpg';
import Coach2 from '../src/images/coach-2.jpg';
import Coach3 from '../src/images/coach-3.jpg';
import { SessionForm } from './book-session.js';
import { SuccessBooked } from './success-book.js';
import HomeBG2 from '../src/images/home-bg-2.jpg';
import HomeBG3 from '../src/images/home-bg-3.jpg';
import HomeBG4 from '../src/images/home-bg-4.jpg';
import HomeBG5 from '../src/images/home-bg-4.jpg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tool } from './tools.js';



export const ServicesPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const sessionsPrices = {
      crossfit: [
          { session: 1, price: 350.00 },
          { session: 12, price: 4200.00 },
          { session: 26, price: 8000.00 },
          { session: 46, price: 12000.00 },
      ],
      boxing: [
          { session: 1, price: 450.00 },
          { session: 12, price: 5400.00 },
          { session: 26, price: 10000.00 },
          { session: 46, price: 13000.00 },
      ],
      personalTraining: [
          { session: 1, price: 350.00 },
          { session: 12, price: 4200.00 },
          { session: 26, price: 8000.00 },
          { session: 46, price: 12000.00 },
      ]
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEmailSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });

      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
        setEmail('');

        setTimeout(() => {
          setMessage('');
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Something went wrong. Please try again.');
      } else {
        console.error('Network or other error:', error);
        setMessage('Something went wrong. Please try again.');
      }

      setEmail('');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <Tool/>
      <div className='h-[12vh]'></div>
      <main className='min-h-[80vh] flex flex-col md:flex-row'>
        <section className='w-full md:w-[50%] min-h-[40vh] md:min-h-full order-1 md:order-1'>
          <img
            src={HomeBG2}
            alt="DG Background"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </section>
        
        <section className='w-full md:w-[50%] bg-tri-color flex justify-center md:justify-start items-center relative order-2 md:order-2 min-h-[50vh] md:min-h-full'>
          <div className='h-auto md:h-[80%] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-amber-400 flex flex-col items-center md:items-end justify-center md:justify-end p-4 sm:p-6 md:p-8 lg:pr-12 lg:pb-12 my-4 md:my-0'>
            <div className='text-center md:text-right w-full'>
              <h1 className='text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl jersey-15-regular leading-tight'>
                <span className='block'>SESSION RATES?</span>
                <span className='block'>COACHING RATES?</span>
                <span className='block'>CHECK OUR SERVICES!</span>
              </h1>
              
              <p className='text-gray-950 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl jersey-15-regular mt-2 md:mt-4'>
                We offers ONE-on-ONE Coaching<br/>
                with these following!
              </p>
              
              <ul className='list-inside list-disc mt-2 md:mt-4 space-y-1 text-center md:text-right md:pr-4 lg:pr-8'>
                <li>
                  <a href='#crossfit' className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                    Crossfit Training
                  </a>
                </li>
                <li>
                  <a href='#boxing' className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                    Boxing Training
                  </a>
                </li>
                <li>
                  <a href='#personal' className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                    Personal Training
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </section>
      </main>
      
      {/* Header Section */}
      <div className='h-[20vh] sm:h-[25vh] flex justify-center items-end pb-4 sm:pb-8 px-4'>
        <h1 className='jersey-15-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center' id='crossfit'>
          Coach Training Rates
        </h1>
      </div>

      {/* CrossFit Training Card */}
      <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[75vh] p-2 sm:p-4">
        <div className="hover:transform hover:translate-x-0 sm:hover:translate-x-[30px] transition-transform duration-300 w-full max-w-6xl"> 
          <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full gap-2">
            {/* Left Section: Image */}
            <div className="lg:w-[40%] w-full">
              <img
                src={Coach1}
                alt="Crossfit Training"
                className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] object-cover lg:object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="lg:w-[60%] w-full p-4 sm:p-6 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-xl sm:text-2xl font-bold">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Crossfit Training</h2>
              
              {/* Pricing */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-semibold flex flex-wrap items-center">
                  1 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl ml-1">350.00</span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  12 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">4,200.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 1 Month
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  26 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">8,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 2 Months
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  46 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">12,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 3 Months
                  </span>
                </h3>
              </div>

              {/* Description */}
              <h2 className="text-lg sm:text-xl font-bold mb-2">Inclusions:</h2>
              <div className="text-sm sm:text-base text-gray-700 space-y-1 mb-4">
                <p>- Strength and Conditioning</p>
                <p>- Circuit Training</p>
                <p>- High-Intensity Interval Training</p>
                <p>- Weight Training</p>
                <p>- Weight Loss/Gain Programs</p>
                <p>- Athletic Performance</p>
              </div>
              
              <button 
                id='boxing' 
                onClick={toggleModal} 
                className="bg-amber-300 text-white w-full sm:w-32 h-12 rounded-lg hover:bg-stone-800 transition-all duration-300 font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <SessionForm className="" toggleModal={toggleModal} />
        </div>
      )}

      {/* Boxing Training Card */}
      <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[75vh] p-2 sm:p-4">
        <div className="hover:transform hover:translate-x-0 sm:hover:translate-x-[30px] transition-transform duration-300 w-full max-w-6xl"> 
          <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full gap-2">
            {/* Left Section: Image */}
            <div className="lg:w-[40%] w-full">
              <img
                src={Coach2}
                alt="Boxing Training"
                className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] object-cover lg:object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="lg:w-[60%] w-full p-4 sm:p-6 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-xl sm:text-2xl font-bold">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Boxing Training</h2>
              
              {/* Pricing */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-semibold flex flex-wrap items-center">
                  1 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl ml-1">450.00</span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  12 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">5,400.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 1 Month
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  26 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">10,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 2 Months
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  46 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">13,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 3 Months
                  </span>
                </h3>
              </div>

              {/* Description */}
              <h2 className="text-lg sm:text-xl font-bold mb-2">Inclusions:</h2>
              <div className="text-sm sm:text-base text-gray-700 space-y-1 mb-4">
                <p>- Boost cardiovascular health</p>
                <p>- Develop endurance</p>
                <p>- Build muscle and strength all over</p>
                <p>- Support a healthy weight</p>
                <p>- Improve balance and coordination</p>
                <p>- Enhance Athletic Performance</p>
              </div>
              
              <button 
                id='personal' 
                onClick={toggleModal} 
                className="bg-amber-300 text-white w-full sm:w-32 h-12 rounded-lg hover:bg-stone-800 transition-all duration-300 font-semibold"
              >
                Book Now
              </button>
            </div>  
          </div>
        </div>
      </div>

      {/* Personal Training Card */}
      <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[75vh] p-2 sm:p-4">
        <div className="hover:transform hover:translate-x-0 sm:hover:translate-x-[30px] transition-transform duration-300 w-full max-w-6xl"> 
          <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full gap-2">
            {/* Left Section: Image */}
            <div className="lg:w-[40%] w-full">
              <img
                src={Coach3}
                alt="Personal Training"
                className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] object-cover lg:object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="lg:w-[60%] w-full p-4 sm:p-6 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-xl sm:text-2xl font-bold">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Personal Training</h2>
              
              {/* Pricing */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-semibold flex flex-wrap items-center">
                  1 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl ml-1">350.00</span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  12 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">4,200.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 1 Month
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold">
                  26 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">8,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 2 Months
                  </span>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  46 Session: ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">12,000.00</span>
                  <span className='text-sm sm:text-base text-gray-500 block sm:inline sm:ml-2'>
                    with Free Gym Access 3 Months
                  </span>
                </h3>
              </div>

              {/* Description */}
              <h2 className="text-lg sm:text-xl font-bold mb-2">Inclusions:</h2>
              <div className="text-sm sm:text-base text-gray-700 space-y-1 mb-4">
                <p>- Circuit Training</p>
                <p>- Strength and Conditioning</p>
                <p>- High-Intensity Interval Training</p>
                <p>- Weight Training</p>
                <p>- Weight Loss/Gain Programs</p>
                <p>- Enhance Athletic Performance</p>
              </div>
              
              <button 
                onClick={toggleModal} 
                className="bg-amber-300 text-white w-full sm:w-32 h-12 rounded-lg hover:bg-stone-800 transition-all duration-300 font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Daily Rates Cards Section */}
      <section className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-6 py-8 sm:py-12 flex-wrap gap-4 px-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 w-full sm:w-[calc(50%-0.5rem)] lg:w-1/4 max-w-sm rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2">Daily</p>
          <img 
            src={PosterIMG1} 
            alt="Image 1" 
            className="w-full h-48 sm:h-60 lg:h-70 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">160.00</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center">Student / Senior / PWD Rate</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 w-full sm:w-[calc(50%-0.5rem)] lg:w-1/4 max-w-sm rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2">New Member</p>
          <img 
            src={PosterIMG2} 
            alt="Image 2" 
            className="w-full h-48 sm:h-60 lg:h-70 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">200.00</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center">Regular Rate</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 w-full sm:w-[calc(50%-0.5rem)] lg:w-1/4 max-w-sm rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2">Old Member</p>
          <img 
            src={PosterIMG3} 
            alt="Image 3" 
            className="w-full h-48 sm:h-60 lg:h-70 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">150.00</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center">Member</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 shadow-lg rounded-lg text-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-h-fit flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="District Gym Logo"
            className="mx-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full border-[2px] border-gray-200 bg-slate-50 shadow-lg"
            draggable="false"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 jersey-15-regular">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-gray-600 mt-2 font-gemunu text-sm sm:text-base px-2">
            Stay updated with the latest news, events, and promotions from District
            Gym. <br className="hidden sm:block" />
            Join our community today!
          </p>
          <form
            onSubmit={handleEmailSubscribe}
            className="mt-4 flex flex-col sm:flex-row justify-center items-center w-full gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:flex-1 max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-amber-300 hover:text-black transition-colors duration-200 text-sm"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-600 px-2">{message}</p>}
        </div>
      </div>
      <SuccessBooked isVisible={successPopup} />
      <Footer />
    </>
  );
};
