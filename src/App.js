import {React, useState, useEffect} from 'react';
import './App.css';

import DefaultDigit from './components/DefaultDigit/DefaultDigit';

function App() {

  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="w-8/12 
                  bg-[#222222] 
                  p-10 
                  rounded-xl 
                  shadow-xl 
                  shadow-[#00000040] 
                  opacity-90 
                  cursor-pointer 
                  transition 
                  hover:-translate-y-2 
                  hover:opacity-100">
        <DefaultDigit digit="0" />
        <DefaultDigit digit="1" />
        <DefaultDigit digit="2" />
        <DefaultDigit digit="3" />
        <DefaultDigit digit="4" />
        <DefaultDigit digit="5" />
        <DefaultDigit digit="6" />
        <DefaultDigit digit="7" />
        <DefaultDigit digit="8" />
        <DefaultDigit digit="9" />
      </div>
    </div>
  );
}

export default App;
