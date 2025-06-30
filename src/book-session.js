import './index.css';
import React, { useState, useEffect } from 'react';
import Close from '../src/images/close.svg';
import axios from 'axios';
import Check from '../src/images/check.svg';  // Or wherever the image is located

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

export const SessionForm = ({ toggleModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sessionType, setSessionType] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [selectedSession, setSelectedSession] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    const [visible, setVisible] = useState(false);

    const refresh = () => {
        setVisible(false);
    }

    const getPrice = (sessionType, numberOfSessions) => {
        let normalizedSessionType;
        if (sessionType === "personalTraining") {
            normalizedSessionType = sessionType;
        } else {
            normalizedSessionType = sessionType.toLowerCase();
        }
        if (sessionsPrices[normalizedSessionType]) {
            const sessionData = sessionsPrices[normalizedSessionType].find(
                (item) => item.session === numberOfSessions
            );
            if (sessionData) {
                return sessionData.price;
            } else {
                console.error(`Invalid session count: ${numberOfSessions} for ${sessionType}`);
                return null;
            }
        } else {
            console.error(`Invalid session type: ${sessionType}`);
            return null;
        }
    };
    const bookSession = async (e) => {
        e.preventDefault();

        const preferredDateObj = new Date(preferredDate);
        const currentDate = new Date();

        if (
            (sessionType === "Boxing" || sessionType === "Crossfit" || sessionType === "Personal Training"
                || sessionType.toLocaleLowerCase() === "boxing" || sessionType.toLocaleLowerCase() === "crossfit" || sessionType.toLocaleLowerCase() === "personaltraining") &&
            preferredDateObj >= currentDate
        ) {
            try {
                const sessionPrice = getPrice(sessionType, selectedSession);
                const sessionCount = selectedSession;
                console.log({
                    name,
                    email,
                    sessionType,
                    preferredDate,
                    sessionCount,
                    sessionPrice,
                });
                const response = await axios.post('http://localhost:5000/api/session-join', {
                    name,
                    email,
                    sessionType,
                    preferredDate,
                    sessionCount,
                    sessionPrice,
                });

                if (response.status === 200) {
                    setVisible(true); // Show success pop-up
                
                    setTimeout(() => {
                        setVisible(false); // Hide it after 5 seconds
                        toggleModal(); // Close modal only after pop-up disappears
                    }, 5000);
                
                    // Clear form fields
                    setName('');
                    setEmail('');
                    setSessionType('');
                    setPreferredDate('');
                }
            } catch (error) {
                if (error.response) {
                    console.error('Error response from server:', error.response);
                } else {
                    console.error('Network or other error:', error);
                }
            }
        } else {
            if (sessionType !== "Boxing" && sessionType !== "Crossfit" && sessionType !== "Personal Training") {
                alert("Please select a valid session type: Boxing, Crossfit, or Personal Training. -" + sessionType + "-");
                console.log(sessionType);
            } else if (preferredDateObj < currentDate) {
                alert("Preferred date cannot be in the past.");
            }
        }
    };

    return (
        <>
        {console.log("Visible: ", visible)}
            {visible && (
                <div id='successPopUp' className=''>
                    <section
                        className={"z-50 fixed top-[calc(50%-10vh)] left-[calc(50%-15vw)]  h-[20vh] w-[30vw] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center"}
                        >
                        <div className="flex items-center">
                            <img
                            src={Check}
                            alt="Check"
                            className="w-10 h-10 object-contain mr-3 rounded-lg"
                            draggable="false"
                            />
                            <h1 className="text-xl font-bold text-green-300 text-center">Successfully Booked!</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-lg font-light text-neutral-800 text-center'>Please wait for our book confirmation.</p>
                            <button onClick={refresh} className='bg-amber-300 text-white w-32 h-12 rounded-lg hover:bg-stone-800 transition-all duration-300'>Ok</button>
                        </div>
                    </section>
                </div>
            )}
            
            <div className="overlay flex items-center justify-center fixed t-[0] l-[0] z-50">
                <form
                    className="relative flex flex-col items-center justify-center w-full max-w-[600px] min-w-[320px] bg-white p-8 md:p-10 rounded-2xl shadow-lg gap-5"
                    onSubmit={bookSession}
                >
                    <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
                        Book Your Session
                    </h1>

                    {/* Close Button */}
                    <button
                        onClick={toggleModal}
                        className="absolute right-5 top-5 text-gray-700 font-bold"
                        type="button"
                    >
                        <img
                            src={Close}
                            alt="Close Icon"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain rounded-lg hover:bg-gray-200 transition"
                            draggable="false"
                        />
                    </button>

                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />

                    {/* Session Type Dropdown */}
                    <select
                        value={sessionType}
                        onChange={(e) => {
                            setSessionType(e.target.value);
                            setSelectedSession(''); // Reset session when changing type
                            setSelectedPrice('');
                        }}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                        <option value="">Select session type</option>
                        <option value="personalTraining">Personal Training</option>
                        <option value="crossfit">Crossfit</option>
                        <option value="boxing">Boxing</option>
                    </select>

                    {/* Preferred Date Input */}
                    <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />

                    {/* Number of Sessions Dropdown */}
                    {sessionType && (
                        <select
                            value={selectedSession}
                            onChange={(e) => {
                                const selectedOption = sessionsPrices[sessionType].find(item => item.session === Number(e.target.value));
                                setSelectedSession(selectedOption.session);
                                setSelectedPrice(selectedOption.price);
                            }}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        >
                            <option value="">Select number of sessions</option>
                            {sessionsPrices[sessionType].map(item => (
                                <option key={item.session} value={item.session}>
                                    {item.session} sessions - ₱{item.price}
                                </option>
                            ))}
                        </select>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-amber-400 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
