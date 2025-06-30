import './index.css';
import React, { useState } from 'react';
import ToolIcon from '../src/images/tool-svgrepo-com.svg';
import Calculator from '../src/images/calc.svg';
import CalorieCalc  from '../src/images/converter1.svg';
import Converter from '../src/images/heart.svg';
import Check from '../src/images/check.svg'; // Assuming you missed importing this

export const Tool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBmiPopup, setShowBmiPopup] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [visible, setVisible] = useState(false);
  const [bmiResult, setBmiResult] = useState('');
  const [classification, setClassification] = useState('');
  
const [age, setAge] = useState('');
const [gender, setGender] = useState('male');
const [activityLevel, setActivityLevel] = useState('sedentary');
const [calorieResult, setCalorieResult] = useState('');
const [deficit, setDeficit] = useState('');
const [surplus, setSurplus] = useState('');

const [showCalorieResult, setShowCalorieResult] = useState(false);

// Update this function to close the calorie suggestor and show the result
const handleCalculateCalories = () => {
  if (weight && height && age && gender && activityLevel) {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee;
    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'light':
        tdee = bmr * 1.375;
        break;
      case 'moderate':
        tdee = bmr * 1.55;
        break;
      case 'intense':
        tdee = bmr * 1.725;
        break;
      default:
        tdee = bmr * 1.2;
    }

    const calorieDeficit = tdee - 500;
    const calorieSurplus = tdee + 500;
    const calorieMaintenance = tdee;

    setCalorieResult(tdee.toFixed(0));
    setDeficit(calorieDeficit.toFixed(0));
    setSurplus(calorieSurplus.toFixed(0));

    // Close the calorie suggestor form and show the result
    setCalorieSuggestorVisibility(false);
    setShowCalorieResult(true);

    setTimeout(() => {
        setShowCalorieResult(false);
      }, 5000);
  }
};
        

  // States for the Unit Converter
  const [converterVisibility, setConverterVisibility] = useState(false);
  const [inches, setInches] = useState('');
  const [pounds, setPounds] = useState('');
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  
  
  const [calorieSuggestorVisibility, setCalorieSuggestorVisibility] = useState(false);
  const openCalorieSuggestorPopup = () => {
    setCalorieSuggestorVisibility(true);
  }
  const closeCalorieSuggestorPopup = () => {
    // Reset the state values to initial empty or default values
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setActivityLevel('sedentary');
    setCalorieResult('');
    setDeficit('');
    setSurplus('');
  
    // Close the calorie suggestor popup
    setCalorieSuggestorVisibility(false);
  };
  
  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const openConverterPopup = () => {
    setConverterVisibility(true);
  }
  const closeConverterPopup = () => {
    setConverterVisibility(false);
    setInches('');
    setPounds('');
    setCm('');
    setKg('');
    
  }
  const openBmiPopup = () => {
    setShowBmiPopup(true);
  };

  const closeBmiPopup = () => {
    setShowBmiPopup(false);
    setWeight('');
    setHeight('');
    setBmiResult('');
    setClassification('');
  };

  const bmiClassification = {
    "Underweight": {
      range: [0, 18.4],
    },
    "Normal weight": {
      range: [18.5, 24.9],
    },
    "Overweight": {
      range: [25, 29.9],
    },
    "Obesity Class I (Moderate)": {
      range: [30, 34.9],
    },
    "Obesity Class II (Severe)": {
      range: [35, 39.9],
    },
    "Obesity Class III (Very Severe or Morbidly Obese)": {
      range: [40, Infinity],  // "Infinity" represents any value 40 or greater
    },
  };

  const handleCalculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmiResult(bmi);
      closeBmiPopup();

      // Determine BMI classification
      for (let classificationKey in bmiClassification) {
        const [min, max] = bmiClassification[classificationKey].range;
        if (bmi >= min && bmi <= max) {
          setClassification(classificationKey);
          break;
        }
      }

      setVisible(true);

      // Hide the BMI result after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000); // 5000 ms = 5 seconds
    }
  };

  // Converter Functions
  const handleInchesToCm = () => {
    if (inches) {
      setCm((inches * 2.54).toFixed(2));  // 1 inch = 2.54 cm
    }
  };

  const handlePoundsToKg = () => {
    if (pounds) {
      setKg((pounds * 0.453592).toFixed(2));  // 1 pound = 0.453592 kg
    }
  };

  return (
    <>
      {visible && (
        <section
            className={`bmi-result z-50 fixed top-[calc(25%-10vh)] left-[calc(50%-15vw)] h-[20vh] w-[30vw] bg-amber-400 shadow-lg rounded-lg flex items-center justify-center ${
            visible ? 'show' : ''
            }`}
        >
            <div className="flex items-center">
            <h1 className="text-lg font-light text-black font-gemunu">
                Your BMI Classification is: <span className='text-white text-xl font-bold'>{classification}</span>
            </h1>
            </div>
        </section>
        )}

<div className="fixed right-[16px] sm:right-[32px] bottom-[32px] sm:bottom-[64px] z-[10]">
        {/* BMI CALCULATOR */}
        <button
          onClick={openBmiPopup}
          aria-label="BMI Calculator"
          className={`hover:bg-white absolute transition-all duration-300 transform ${
            isOpen ? 'translate-y-[-60px] sm:translate-y-[-80px] opacity-100' : 'translate-y-0 opacity-0 pointer-events-none'
          } shadow-md flex items-center justify-center w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full bg-zinc-900`}
        >
          <img src={Calculator} alt="BMI Calculator" className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>

        {/* CONVERTER */}
        <button
        onClick={openCalorieSuggestorPopup}
          aria-label="Unit Converter"
          className={`hover:bg-white absolute transition-all duration-300 transform ${
            isOpen ? 'translate-x-[-60px] sm:translate-x-[-80px] opacity-100' : 'translate-x-0 opacity-0 pointer-events-none'
          } shadow-md flex items-center justify-center w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full bg-zinc-900`}
        >
          <img src={Converter} alt="Unit Converter" className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>

        {/* CALORIE SUGGESTOR */}
        <button
            onClick={openConverterPopup}
          aria-label="Calorie Suggestor"
          className={`hover:bg-white absolute transition-all duration-300 transform ${
            isOpen
              ? 'translate-x-[-42px] translate-y-[-42px] sm:translate-x-[-56px] sm:translate-y-[-56px] opacity-100'
              : 'translate-x-0 translate-y-0 opacity-0 pointer-events-none'
          } shadow-md flex items-center justify-center w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full bg-zinc-900`}
        >
          <img src={CalorieCalc} alt="Calorie Suggestor" className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>

        {/* Main floating button */}
        <button
          onClick={toggleButtons}
          aria-label="Toggle Tools"
          className={`shadow-md hover:bg-white transition duration-300 transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          } flex items-center justify-center w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full bg-black`}
        >
          <img src={ToolIcon} alt="Tools" className="w-6 h-6 sm:w-10 sm:h-10" />
        </button>
      </div>

      {/* Fullscreen BMI Calculator Popup */}
      {showBmiPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[50]">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-md shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4 jersey-15-regular">BMI Calculator</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  min="0"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter weight in kg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  min="0"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter height in cm"
                />
              </div>
              <button
                type="button"
                onClick={handleCalculateBMI}
                className="w-full bg-amber-400 text-white py-2 rounded-lg transition duration-200 transform hover:scale-90"
              >
                Calculate BMI
              </button>
              <button
                type="button"
                onClick={closeBmiPopup}
                className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-100 transition duration-300 hover:text-black shadow-lg transform hover:scale-90"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Unit Converter Popup */}
      {converterVisibility && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[50]">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-md shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4 jersey-15-regular">Unit Converter</h2>

            {/* Inches to cm */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-lg text-semibold">Inches</label>
              <input
                type="number"
                min="0"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter inches"
              />
              <button
                type="button"
                onClick={handleInchesToCm}
                className="mt-2 w-full bg-amber-400 text-white py-2 rounded-lg transition duration-200 transform hover:scale-90"
              >
                Convert to CM
              </button>
              {cm && <p className="mt-2 text-gray-700 text-center">Result: <span className='text-neutral-950 text-xl'>{cm} cm</span></p>}
            </div>

            {/* Pounds to kg */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-lg text-semibold">Pounds</label>
              <input
                type="number"
                min="0"
                value={pounds}
                onChange={(e) => setPounds(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter pounds"
              />
              <button
                type="button"
                onClick={handlePoundsToKg}
                className="mt-2 w-full bg-amber-400 text-white py-2 rounded-lg transition duration-200 transform hover:scale-90"
              >
                Convert to KG
              </button>
              {kg && <p className="mt-2 text-gray-700 text-center">Result: <span className='text-neutral-950 text-xl'>{kg} kg</span></p>}
            </div>

            <button
              type="button"
              onClick={closeConverterPopup}
              className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-100 transition duration-300 hover:text-black shadow-lg transform hover:scale-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    {calorieSuggestorVisibility && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[50]">
        <div className="bg-white p-8 rounded-lg w-[90%] max-w-md shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4 jersey-15-regular">Calorie Suggestor</h2>

          {/* Age Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg text-semibold">Age</label>
            <input
              type="number"
              min="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your age"
            />
          </div>

          {/* Gender Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg text-semibold">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Weight Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg text-semibold">Weight (kg)</label>
            <input
              type="number"
              min="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter weight in kg"
            />
          </div>

          {/* Height Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg text-semibold">Height (cm)</label>
            <input
              type="number"
              min="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter height in cm"
            />
          </div>

          {/* Activity Level Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg text-semibold">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="intense">Very active (hard exercise/sports 6-7 days a week)</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button
            type="button"
            onClick={handleCalculateCalories}
            className="w-full bg-amber-400 text-white py-2 rounded-lg transition duration-200 transform hover:scale-90"
          >
            Calculate Calories
          </button>

          <button
            type="button"
            onClick={closeCalorieSuggestorPopup}
            className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-100 transition duration-300 hover:text-black shadow-lg transform hover:scale-90"
          >
            Close
          </button>
        </div>
      </div>
    )}
    {showCalorieResult && calorieResult && (
  <section
    className={`calorie-result z-50 fixed top-[calc(25%-10vh)] left-[calc(50%-15vw)] h-[20vh] w-[30vw] bg-amber-400 shadow-lg rounded-lg flex items-center justify-center`}
  >
    <div className="flex items-center">
      <h1 className="text-lg font-light text-black font-gemunu text-center">
        Maintenance Suggested Daily Calories: <span className='text-white text-xl font-bold'>{calorieResult} kcal</span> <br />
        Deficit Suggested Daily Calories: <span className='text-white text-xl font-bold'>{deficit} kcal</span> <br />
        Surplus Suggested Daily Calories: <span className='text-white text-xl font-bold'>{surplus} kcal</span>
      </h1>
    </div>
  </section>
)}

    </>
  );
};
