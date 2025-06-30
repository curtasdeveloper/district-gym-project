import './index.css';
import React, { useState, useEffect } from 'react';
import { Header } from './header.js';
import { Footer } from './footer.js';
import image from '../src/images/image.png';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import DisrictPips from '../src/images/district-pips.jpg';
import poster1 from '../src/images/why-join-us-1.jpg';
import poster2 from '../src/images/why-join-us-2.jpg';
import poster3 from '../src/images/home-bg-2.jpg';
import coach1 from '../src/images/coach1.jpg'
import coach5 from '../src/images/coach4.jpg'
import coach7 from '../src/images/coach7.jpg'
import coach2 from '../src/images/coach-2.jpg'
import coach3 from '../src/images/coach-3.jpg'
import coach4 from '../src/images/coach-1.jpg'
import { Tool } from './tools.js';



export const WhyJoinUsPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

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
        <section className='w-full md:w-[50%] bg-tri-color flex justify-center md:justify-end items-center relative order-2 md:order-1 min-h-[50vh] md:min-h-full'>
          <div className='h-auto md:h-[80%] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-amber-400 p-4 sm:p-6 md:p-8 lg:pl-12 lg:pt-12 my-4 md:my-0'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl jersey-15-regular leading-tight'>
              <span className='text-white drop-shadow-lg'>WHY JOIN US?</span>
              <br></br>
              <span className='text-gray-900 drop-shadow-sm'>WHY JOIN US?</span>
              <br></br>
              <span className='text-gray-800 drop-shadow-sm'>WHY JOIN US?</span>
              <br></br>
              <span className='text-gray-700 drop-shadow-sm'>WHY JOIN US?</span>
            </h1>
            <span className='text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl jersey-15-regular font-semibold block mt-2 md:mt-3 lg:mt-4'>
              We offer BEST-of-BEST Quality such things:
            </span>
            <ul className='pl-4 md:pl-6 lg:pl-8 list-disc mt-2 md:mt-3 lg:mt-4 space-y-1'>
              <li>
                <a href='#navigate' className='text-sm sm:text-base md:text-base lg:text-lg text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                  Quality Session
                </a>
              </li>
              <li>
                <a href='#navigate' className='text-sm sm:text-base md:text-base lg:text-lg text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                  Very Affordable
                </a>
              </li>
              <li>
                <a href='#navigate' className='text-sm sm:text-base md:text-base lg:text-lg text-gray-800 hover:text-white hover:font-semibold transition duration-300 font-gemunu'>
                  Good Environment
                </a>
              </li>
            </ul>
          </div>
        </section>
        
        <section className='w-full md:w-[50%] min-h-[40vh] md:min-h-full order-1 md:order-2'>
          <img
            src={DisrictPips}
            alt="DG Background"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </section>
      </main>

      <div className='h-[15vh]' id='navigate'></div>
      <section className="flex justify-center items-center space-x-6 py-12 flex-wrap min-h-screen">
      {/* Card 1 */}
      <div className="flex flex-col justify-between items-center bg-white shadow-lg p-6 w-full sm:w-1/3 md:w-1/4 min-h-[640px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
        <p className="jersey-15-regular font-bold text-4xl text-gray-800 mb-4 text-center">Quality Sessions</p>
        <img src={poster1} alt="Image 1" className="w-full h-[320px] object-cover mb-4 rounded-lg" draggable="false" />
        <p className="text-md text-gray-500 text-center break-words font-gemunu">
          Join our energizing group classes led by experienced trainers, perfect for all fitness levels. These sessions 
          combine strength, cardio, and flexibility exercises in a motivating group setting, helping you stay accountable 
          and connected with others on similar fitness journeys. Whether you're just starting out or a fitness enthusiast, 
          you'll find value in our tailored sessions that prioritize both your progress and well-being.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col justify-between items-center bg-white shadow-lg p-6 w-full sm:w-1/3 md:w-1/4 min-h-[640px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
        <p className="jersey-15-regular font-bold text-4xl text-gray-800 mb-4 text-center">Very Affordable</p>
        <img src={poster2} alt="Image 2" className="w-full h-[320px] object-cover mb-4 rounded-lg" draggable="false" />
        <p className="text-md text-gray-500 text-center break-words font-gemunu">
          Our gym offers personalized training programs tailored to help you reach your fitness goals efficiently and safely. 
          We believe that fitness should be accessible to everyone, which is why our programs are priced affordably without 
          compromising on quality.Our expert trainers are dedicated to supporting you every step of the way. Discover value in our flexible membership options, tailored to suit different budgets and 
          fitness preferences.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col justify-between items-center bg-white shadow-lg p-6 w-full sm:w-1/3 md:w-1/4 min-h-[640px] rounded-lg hover:transform hover:translate-y-[-15px] transition-transform duration-300">
        <p className="jersey-15-regular font-bold text-4xl text-gray-800 mb-4 text-center">Good Environment</p>
        <img src={poster3} alt="Image 3" className="w-full h-[320px] object-cover mb-4 rounded-lg" draggable="false" />
        <p className="text-md text-gray-500 text-center break-words font-gemunu">
          Boost wellness in your workplace with our corporate training programs. Tailored to fit your company's needs, these 
          sessions are designed to reduce stress, enhance productivity, and foster team spirit. Our gym is designed with a 
          welcoming environment that inspires positivity, allowing you to feel motivated and energized every time you visit.
          Our corporate programs also focus on improving overall employee health and satisfaction.
        </p>
      </div>
    </section>


    <div className='h-[15vh] md:h-[20vh] flex justify-center items-end pb-4 md:pb-8 px-4'>
  <h1 className='text-2xl sm:text-3xl md:text-4xl text-amber-400 bg-white jersey-15-regular underline underline-offset-8 text-center'>
    Here are some of our Happy Clients with our Coaches!
  </h1>
</div>

{/* First row of cards */}
<section className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 py-6 md:py-12 min-h-[400px] md:min-h-[530px] px-4 md:px-8 lg:px-16 xl:px-32">
  {/* Card 1 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach1}
      alt="Coach Arvin with crossfit client"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Arvin who specialized on crossfit training with his client
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach3}
      alt="Coach Benji with muscle building client John"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Benji who specialized on muscle building and strength training with his client John
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach2}
      alt="Coach Ryan with boxing client Rico"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Ryan who specialized on boxing training with his client Rico
      </p>
    </div>
  </div>
</section>

{/* Second row of cards */}
<section className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 py-6 md:py-12 min-h-[400px] md:min-h-[530px] px-4 md:px-8 lg:px-16 xl:px-32">
  {/* Card 4 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach7}
      alt="Coach Arvin with crossfit client Donna"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Arvin who specialized on crossfit training with his client Donna
      </p>
    </div>
  </div>

  {/* Card 5 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach5}
      alt="Coach Benji with couple clients Jojo and Tessa"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Benji who specialized on muscle building and strength training with his couple client Jojo and Tessa
      </p>
    </div>
  </div>

  {/* Card 6 */}
  <div className="relative group w-full max-w-sm lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
    <img
      src={coach4}
      alt="Coach Arvin with boxing client Janna"
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all"></div>
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 md:p-8 lg:p-12">
      <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center font-gemunu">
        Coach Arvin who specialized on boxing training with his client Janna
      </p>
    </div>
  </div>
</section>


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
