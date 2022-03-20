import React from 'react';
import { FaBook } from 'react-icons/fa';
export const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <FaBook className='inline pr-2 text-3xl text-white' />
        <p>Be4writing.com {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};
