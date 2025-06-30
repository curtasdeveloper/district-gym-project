import './index.css';
import React, { useState } from 'react';
import { Header } from './header.js';
import { Footer } from './footer.js';
import image from '../src/images/image.png';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeBG2 from '../src/images/home-bg-2.jpg';
import pips from '../src/images/district-people.jpg';
import HomeBG4 from '../src/images/home-bg-4.jpg';
import IMAGE1 from '../src/images/home-bg-2.jpg';
import IMAGE2 from '../src/images/home-bg-3.jpg';
import IMAGE3 from '../src/images/home-bg-4.jpg';
import IMAGE4 from '../src/images/home-bg-4.jpg';
import coachicon1 from '../src/images/fitness-2-40.png';
import coachicon2 from '../src/images/fitness-46.png';
import Check from '../src/images/check.svg';
import { Tool } from './tools.js';



const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];

export const AboutUsPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

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
      <div className='h-[6vh]'></div>

      <div className="min-h-screen bg-tri-color flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0">
        {/* Background Image Section */}
        <section className="relative w-full lg:w-[40vw] h-[40vh] sm:h-[50vh] lg:h-[60vh] flex flex-col items-center justify-center shadow-lg overflow-hidden rounded-lg lg:rounded-none">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
            }}
          ></div>
        </section>

        {/* Info Section */}
        <section className='w-full lg:w-[25vw] min-h-[40vh] lg:h-[60vh] bg-amber-400 flex flex-col items-center justify-center p-6 lg:p-8 rounded-lg lg:rounded-none'>
          {/* Logo and Title */}
          <div className="flex flex-col sm:flex-row items-center mb-6 lg:mb-4 text-center sm:text-left">
            <img
              src={image}
              alt="District Gym Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[64px] lg:h-[64px] mb-3 sm:mb-0 sm:mr-3 rounded-full border-[1px] border-gray-300 bg-white"
              draggable="false"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold jersey-15-regular text-white">
              District Gym
            </h1>
          </div>

          {/* Contact Information */}
          <div className='w-full max-w-md space-y-3'>
            {/* Address */}
            <div className="font-gemunu text-sm sm:text-md flex flex-col sm:flex-row sm:items-center font-bold">
              <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white ml-2 sm:ml-1">:</span>
              </div>
              <a
                href="https://maps.app.goo.gl/2ynYhw3KSaV1JfYRA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline hover:underline-offset-4 text-center sm:text-left sm:ml-1 break-words"
              >
                J. P. Rizal Street, Biga I, Silang, 4118 Cavite
              </a>
            </div>

            {/* Facebook */}
            <div className="font-gemunu text-sm sm:text-md flex flex-col sm:flex-row sm:items-center font-bold">
              <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12v-9H9v-4h3V8.158C12 5.21 13.792 3.5 16.458 3.5c1.427 0 2.9.25 2.9.25v3h-1.634C16.74 6.75 16 7.482 16 8.566V11h4l-1 4h-3v9h5.675c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
                <span className="text-white ml-2 sm:ml-1">:</span>
              </div>
              <a
                href="https://www.facebook.com/DistrictGymCavite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline hover:underline-offset-4 text-center sm:text-left sm:ml-1"
              >
                Facebook Page
              </a>
            </div>

            {/* Email */}
            <div className="font-gemunu text-sm sm:text-md flex flex-col sm:flex-row sm:items-center font-bold">
              <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4H2C1.447 4 1 4.447 1 5v14c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V5c0-.553-.447-1-1-1zm-1 2v12H3V6h18zM12 13l9-6H3l9 6z" />
                </svg>
                <span className="text-white ml-2 sm:ml-1">:</span>
              </div>
              <a
                href="mailto:setileexpert@gmail.com"
                className="text-white hover:underline hover:underline-offset-4 text-center sm:text-left sm:ml-1 break-all"
              >
                Email Account
              </a>
            </div>

            {/* Phone */}
            <div className="font-gemunu text-sm sm:text-md flex flex-col sm:flex-row sm:items-center text-white font-bold">
              <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011-.27 10.05 10.05 0 003.17.51 1 1 0 011 1v3.35a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.35a1 1 0 011 1 10.05 10.05 0 00.51 3.17 1 1 0 01-.24 1z"/>
                </svg>
                <span className="text-white ml-2 sm:ml-1">:</span>
              </div>
              <span className='text-white text-center sm:text-left sm:ml-1'>0967 665 5195</span>
            </div>
          </div>
        </section>
      </div>

      {/* Vision Section */}
      <section className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 min-h-screen relative">
        {/* Title */}
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-amber-400 bg-white jersey-15-regular underline underline-offset-8 text-center mb-8 sm:mb-12 lg:mb-16 px-4 py-2 rounded-lg shadow-sm'>
          Our Gym's Vision
        </h1>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="flex flex-col justify-between items-center bg-white shadow-lg p-4 sm:p-6 w-full lg:w-1/3 min-h-[450px] sm:min-h-[500px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
            <img 
              src={HomeBG4} 
              alt="Accessible Fitness" 
              className="w-full h-[200px] sm:h-[250px] lg:h-[320px] object-cover mb-4 rounded-lg" 
              draggable="false" 
            />
            <p className="jersey-15-regular font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4 text-center">
              Accessible Fitness
            </p>
            <p className="text-sm sm:text-md text-gray-500 text-center break-words font-gemunu leading-relaxed">
              "Our future is to pioneer accessible fitness from every corner of the globe, breaking down barriers and uplifting communities through the universal language of health."
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between items-center bg-white shadow-lg p-4 sm:p-6 w-full lg:w-1/3 min-h-[450px] sm:min-h-[500px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
            <img 
              src={pips} 
              alt="United In Fitness" 
              className="w-full h-[200px] sm:h-[250px] lg:h-[320px] object-cover mb-4 rounded-lg" 
              draggable="false" 
            />
            <p className="jersey-15-regular font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4 text-center">
              United In Fitness
            </p>
            <p className="text-sm sm:text-md text-gray-500 text-center break-words font-gemunu leading-relaxed">
              "Our vision is to redefine the frontiers of fitness, encouraging a more holistic approach to wellbeing that balances body, mind, and spirit."
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between items-center bg-white shadow-lg p-4 sm:p-6 w-full lg:w-1/3 min-h-[450px] sm:min-h-[500px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
            <img 
              src={HomeBG2} 
              alt="Sustainable Fitness" 
              className="w-full h-[200px] sm:h-[250px] lg:h-[320px] object-cover mb-4 rounded-lg" 
              draggable="false" 
            />
            <p className="jersey-15-regular font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4 text-center">
              Sustainable Fitness
            </p>
            <p className="text-sm sm:text-md text-gray-500 text-center break-words font-gemunu leading-relaxed">
              "We imagine a world where fitness and sustainability converge, with our gym leading the charge toward environmentally-conscious health and wellness practices."
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <div className='min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center p-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 sm:p-8 hover:scale-105 transition-transform duration-200'>
          
          {/* Left Coach Icon - Hidden on mobile, visible on large screens */}
          <div className='hidden lg:flex w-[20%] justify-center items-end'>
            <img
              src={coachicon1}
              alt="Coach Icon"
              className="max-w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Content Section */}
          <section className='w-full lg:w-[60%] flex flex-col justify-center items-center text-center lg:px-4'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold jersey-15-regular text-black mb-4 sm:mb-6'>
              We're Hiring GYM Coaches!
            </h1>
            <p className='font-semibold text-lg sm:text-xl lg:text-xl mb-6 text-center px-2'>
              Looking for MALE and FEMALE coaches to join our team!
            </p>
            
            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center sm:justify-start">
                <img 
                  src={Check} 
                  alt="Check Icon" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-3 rounded-lg flex-shrink-0" 
                  draggable="false" 
                />
                <p className="font-gemunu text-base sm:text-lg text-gray-700">Passionate about fitness</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <img 
                  src={Check} 
                  alt="Check Icon" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-3 rounded-lg flex-shrink-0" 
                  draggable="false"
                />
                <p className="font-gemunu text-base sm:text-lg text-gray-700">Great communication skills</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <img 
                  src={Check} 
                  alt="Check Icon" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-3 rounded-lg flex-shrink-0" 
                  draggable="false"
                />
                <p className="font-gemunu text-base sm:text-lg text-gray-700">Ready to inspire and motivate</p>
              </div>
            </div>

            {/* CTA Link */}
            <a 
              href="mailto:districtgym@gmail.com" 
              target='_blank' 
              rel="noopener noreferrer"
              className="text-slate-500 underline hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-200"
            >
              Send your details here!
            </a>
          </section>

          {/* Right Coach Icon - Hidden on mobile, visible on large screens */}
          <div className='hidden lg:flex w-[20%] justify-center items-start'>
            <img
              src={coachicon2}
              alt="Coach Icon"
              className="max-w-full h-auto"
              draggable="false"
            />
          </div>
        </div>
      </div>

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
      <Footer />
    </>
  );
};
