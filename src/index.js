import './index.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServicesPage } from './services.js'; // added .js
import { WhyJoinUsPage } from './why-join-us.js'; // added .js
import { AboutUsPage } from './about-us.js'; // added .js
import { Header } from './header.js'; // added .js
import { Tool } from './tools.js';
import { Footer } from './footer.js'; // added .js
import image from '../src/images/image.png';
import HomeBG1 from '../src/images/home-bg-1.jpg';
import HomeBG2 from '../src/images/home-bg-2.jpg';
import HomeBG3 from '../src/images/home-bg-3.jpg';
import HomeBG4 from '../src/images/home-bg-4.jpg';
import HomeBG5 from '../src/images/home-bg-5.jpg';
import PosterIMG1 from '../src/images/poster-1.png';
import PosterIMG2 from '../src/images/poster-2.png';
import PosterIMG3 from '../src/images/poster-3.png';
import Check from '../src/images/check.svg';
import Close from '../src/images/close.svg';
import Coach1 from '../src/images/coach-1.jpg';
import Coach2 from '../src/images/coach-2.jpg';
import Coach3 from '../src/images/coach-3.jpg';
import axios from 'axios';
import { SuccessBooked } from './success-book.js';
import { useLocation } from "react-router-dom";
import { SessionForm } from './book-session.js';



const App = () => {
  
  // HOMEPAGE
  const images = [HomeBG1, HomeBG2, HomeBG3, HomeBG4, HomeBG5];
  const [currentImage, setCurrentImage] = useState(0);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  // Function to change to the next image
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Function to change to the previous image
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleImageClick = (e) => {
    const width = window.innerWidth;
    // Check if the click is on the left side (clicking on the left half)
    if (e.clientX < width / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  const { ref: slideRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const { ref: slideRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: slideRef3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
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
        setEmail('');
        setTimeout(() => {
          setMessage('');
        }, 3000);
        setMessage(error.response.data.message || 'Something went wrong. Please try again.');
        
      } else {
        console.error('Network or other error:', error);
        setMessage('Something went wrong. Please try again.');
      }
    }
  };


  return (
    <>
      <Header />
      <Tool/>
      <main className="relative w-full h-screen mt-[10vh]">
        {/* Dynamic background image */}
        <img
          src={images[currentImage]}
          alt="DG Background"
          className="w-full h-[80vh] object-cover transition-opacity duration-1000 blur-[7px]"
          draggable="false"
          onClick={handleImageClick} // Add the click event handler here
        />
        
        {/* Left button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Stop the event propagation so the main click handler doesn't trigger
            prevImage();
          }}
          className="absolute left-10 top-[38%] transform -translate-y-1/2  bg-slate-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>

        {/* Right button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Stop the event propagation so the main click handler doesn't trigger
            nextImage();
          }}
          className="absolute right-10 top-[38%] transform -translate-y-1/2  bg-slate-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>

        {/* Section with text (not clickable) */}
        <section className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col justify-center items-center text-center mt-5">
          <h1 className="jersey-15-regular text-gray-50 text-6xl font-bold">
            Achieve Your Best Self Today!
          </h1>
          <p className="text-gray-50 jersey-15-regular text-xl font-light">
            Start your gym and fitness journey with us.
          </p>
          <button onClick={toggleModal} className="bg-amber-300 text-white w-32 h-12 rounded-lg hover:bg-stone-800 transition-all duration-300">
            Join now
            </button>
            
        </section>
      </main>
      
      <SuccessBooked isVisible={successPopup} />
      {/* Section with 3 Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300 mx-auto w-full max-w-sm">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2 text-center">Daily</p>
          <img 
            src={PosterIMG1} 
            alt="Image 1" 
            className="w-full h-48 sm:h-56 md:h-64 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">160.00</span>
          </h3>
          <p className="text-sm text-gray-500">Rate</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300 mx-auto w-full max-w-sm">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2 text-center">New Member</p>
          <img 
            src={PosterIMG2} 
            alt="Image 2" 
            className="w-full h-48 sm:h-56 md:h-64 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">200.00</span>
          </h3>
          <p className="text-sm text-gray-500">Rate</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300 mx-auto w-full max-w-sm">
          <p className="jersey-15-regular text-bold text-2xl sm:text-3xl text-gray-800 mb-2 text-center">Old Member</p>
          <img 
            src={PosterIMG3} 
            alt="Image 3" 
            className="w-full h-48 sm:h-56 md:h-64 object-cover mb-4 rounded-lg" 
            draggable="false"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            ₱ <span className="jersey-15-regular text-amber-300 text-xl sm:text-2xl">150.00</span>
          </h3>
          <p className="text-sm text-gray-500">Rate</p>
        </div>
      </div>
    </div>
  </section>

    <section className="gym-benefits bg-white py-12 px-4 text-center h-auto sm:h-[70vh]">
      <h2 className="jersey-15-regular text-4xl sm:text-6xl font-bold text-gray-800 mb-8 pt-[64px]">
        FIND A GYM WITH <br /> ALL THE RIGHT BENEFITS
      </h2>
      <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" draggable="false" />
          <p className="font-gemunu text-lg text-gray-700">Open from 7:00 am to 10:00 pm</p>
        </div>
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" />
          <p className="font-gemunu text-lg text-gray-700">Personal & group training</p>
        </div>

        {/* Center Column */}
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" draggable="false" />
          <p className="font-gemunu text-lg text-gray-700">Access to multiple equipments</p>
        </div>
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" />
          <p className="font-gemunu text-lg text-gray-700">Free fitness consultation</p>
        </div>

        {/* Right Column */}
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" draggable="false" />
          <p className="font-gemunu text-lg text-gray-700">Personalized plan</p>
        </div>
        <div className="benefit-item text-left flex items-center">
          <img src={Check} alt="Check Icon" className="w-10 h-10 object-contain mr-3 rounded-lg" draggable="false" />
          <p className="font-gemunu text-lg text-gray-700">Access to our own community</p>
        </div>
      </div>
    </section>



          {/*SLIDE EFFECT ON RENDERED WHILE SCROLL HAPPENS HERE*/}
      <div className="flex justify-center items-center min-h-80 p-2 mb-12 ">
        <div className="hover:transform hover:translate-x-[30px] transition-transform duration-300"> 
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[70vw] gap-2">
            {/* Left Section: Image */}
            <div className="md:w-[40%] w-full">
              <img
                src={Coach1}
                alt="Crossfit Training"
                className="w-[] h-[65vh] object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="md:w-[75%] w-full p-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-12 h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-2xl font-bold jersey-15-regular">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Crossfit Training</h2>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                Boosts wellness in your workplace with crossfit training programs.
                Tailored to fit your company's needs, these sessions are designed to
                reduce stress, enhance productivity, and foster team spirit. Offers
                on-site or in-gym sessions that incorporate both fitness and
                wellness.
              </p>
              <p className="text-gray-700 mb-6">
                We are so excited and honored to share with you our insights, tips,
                and tricks we've acquired over years of hard work!
              </p>

              {/* Button */}
              <button onClick={toggleModal} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition w-[200px]">
                Book Your Spot
              </button>
            </div>
          </div>
        </div>
          
      </div>
      <div className="flex justify-center items-center min-h-80 p-2 mb-12">
        <div className="hover:transform hover:translate-x-[30px] transition-transform duration-300">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[70vw] gap-2">
            {/* Left Section: Image */}
            <div className="md:w-[40%] w-full">
              <img
                src={Coach2}
                alt="Crossfit Training"
                className="w-[] h-[65vh] object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="md:w-[75%] w-full p-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-12 h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-2xl font-bold jersey-15-regular">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Boxing Training</h2>

              {/* Description */}
              <p className="text-gray-700 mb-6">
              Step into the ring and discover the fighter within you! Our boxing training class is the perfect combination of fitness, discipline, and fun. Whether you're looking to get in shape, learn self-defense, or boost your confidence, we’ve got you covered.?
              </p>
              <p className="text-gray-700 mb-6">
              We are so excited and honored to share with you our insights, tips, and tricks we've acquired over years of hard work!
              </p>

              {/* Button */}
              <button onClick={toggleModal} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition w-[200px]">
                Book Your Spot
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-80 p-2 mb-12">
        <div className="hover:transform hover:translate-x-[30px] transition-transform duration-300">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[70vw] gap-2">
            {/* Left Section: Image */}
            <div className="md:w-[40%] w-full">
              <img
                src={Coach3}
                alt="Crossfit Training"
                className="w-[] h-[65vh] object-contain"
                draggable="false"
              />
            </div>

            {/* Right Section: Text */}
            <div className="md:w-[75%] w-full p-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="District Gym Logo"
                  className="w-12 h-12 mr-3 rounded-full border-[1px] border-gray-300"
                  draggable="false"
                />
                <h1 className="text-2xl font-bold jersey-15-regular">District Gym</h1>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Personal Training</h2>

              {/* Description */}
              <p className="text-gray-700 mb-6">
              Offers personalized training programs tailored to help you reach your fitness goals efficiently and safely. Provides one-on-one coaching, customized workout plans, and expert advice on nutrition and lifestyle changes. Motivates and supports you every step of the way?
              </p>
              <p className="text-gray-700 mb-6">
              We are so excited and honored to share with you our insights, tips, and tricks we've acquired over years of hard work!
              </p>

              {/* Button */}
              <button onClick={toggleModal} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition w-[200px]">
                Book Your Spot
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <div className='modal'>
                <SessionForm className="" toggleModal={toggleModal} />
      </div>}

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
            Gym. <br />
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
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/why-join-us" element={<WhyJoinUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  </BrowserRouter>
);
