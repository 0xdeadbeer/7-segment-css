import {React, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    setText("b");
  })

  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="container">
        <div className="grid-container">
          <div className="active-segment segment f-segment vertical-segment"></div>
          <div className="active-segment segment a-segment horizontal-segment"></div>
          <div className="active-segment segment b-segment vertical-segment"></div>
          <div className="inactive-segment segment g-segment horizontal-segment"></div>
          <div className="active-segment segment e-segment vertical-segment"></div>
          <div className="active-segment segment c-segment vertical-segment"></div>
          <div className="active-segment segment d-segment horizontal-segment"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
