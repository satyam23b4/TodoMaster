import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex bg-gray-800 p-2'>
      <div className="logo font-bold text-2xl flex items-center">
        <img src="./trademark2.png" alt="Logo" className="h-8 w-8 mr-2" />
        TodoMaster
      </div>
      <div className='flex flex-1 justify-center items-center mr-[140px]'>
        <ul className='flex space-x-32'>
          <li className='cursor-pointer font-semibold hover:font-bold text-lg text-gray-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer font-semibold hover:font-bold text-lg text-gray-300'>
            <Link to="/contact">Contact</Link>
          </li>
          <li className='cursor-pointer font-semibold hover:font-bold text-lg text-gray-300'>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
