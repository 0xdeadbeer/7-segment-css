import {React, useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Segmented from './components/Segmented/Segmented';



const  App = () => {

  const [time, setTime] = useState(0); 

  useEffect(() => {
    setInterval(() => {
      const date = new Date(); 
      setTime(parseInt(date.getTime() / 1000));
    }, 1000);
  }, [time])


  return (
    <div>
      <div className="grid place-items-center h-screen w-full">
        <div>
          <h1 className="text-center text-5xl mb-10 font-semibold">7 Segments in CSS</h1>
          <div 
              title="Click to copy to clipboard" 
              onClick={() => {
                navigator.clipboard.writeText(time.toString()); 
                toast.success('Unix timestamp successfully copied to your clipboard!', {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }} 
              
              className="
                m-auto
                w-fit
                bg-[#222222] 
                p-10 
                rounded-xl 
                shadow-2xl 
                shadow-[#00000063] 
                opacity-90 
                cursor-pointer 
                transition 
                hover:-translate-y-1
                hover:opacity-100
                hover:shadow-[#00000094] 
                space-x-3
                relative">
            <div className="
              bg-[#272727]
              absolute 
              top-[-15px] 
              left-12
              rounded-full
              px-4
              py-1
              text-red-600
              uppercase
              font-semibold
              ">
              <p>Unix timestamp</p>
            </div>
            <Segmented value={time.toString()} />
          </div>
        </div>
      </div>  
      <ToastContainer limit={1} />

      {/* profile */}
      <div className="absolute top-0 right-0 m-5 flex items-center justify-center space-x-4">
        <a href="http://kevintheadminman.epizy.com">@Osamu-kj</a>
        <a href="https://github.com/osamu-kj/7SegmentCSS">
          <img src="/imgs/icon.svg" 
              width="40px" 
              alt="Contact Link" 
              title="Github Repository Link" 
              className="
                transition
                opacity-80 
                cursor-pointer
                hover:opacity-100"
              />
        </a>
      </div>
    </div>
  );
}

export default App;
