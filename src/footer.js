import './index.css';
import React from 'react';
import { Header } from './header.js';

export const Footer = () => (
  <footer className="bg-amber-300 border-t border-gray-300 py-4 px-4 md:px-10">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <p className="text-sm text-gray-500 text-center sm:text-left">
        © 2025 District Gym. All rights reserved.
      </p>
      <a
        href="https://www.facebook.com/DistrictGymCavite"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center sm:justify-start text-gray-800 hover:text-gray-700 transition-colors"
      >
        <span className="mr-2 text-sm">Follow us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-label="Facebook"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12v-9H9v-4h3V8.158C12 5.21 13.792 3.5 16.458 3.5c1.427 0 2.9.25 2.9.25v3h-1.634C16.74 6.75 16 7.482 16 8.566V11h4l-1 4h-3v9h5.675c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </a>
    </div>
  </footer>
);