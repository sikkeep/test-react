// components/Home.tsx
'use client';

import React, { useState } from 'react';
import FormReg from '../components/FormReg';
import FormLogin from '../components/FormLogin';

const Home: React.FC = () => {
  const [showLogin, setshowLogin] = useState<boolean>(false);
  const [showReg, setshowReg] = useState<boolean>(false);

  const handleButtonClick1 = () => {
    setshowLogin(true);
    setshowReg(false);
  };

  const handleButtonClick2 = () => {
    setshowLogin(false);
    setshowReg(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Login / Registration</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick1}>Login</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick2}>Registration</button>
      </div>

      {showLogin && <div className="mt-4 bg-gray-200 p-4 rounded"><FormLogin /></div>}
      {showReg && <div className="mt-4 bg-gray-200 p-4 rounded"><FormReg /></div>}
    </div>
  );
};

export default Home;