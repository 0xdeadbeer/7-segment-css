import {React, useState, useEffect } from "react"; 
import "./default-digit-style.css";


function DefaultDigit({digit}) {

    const [digitValue, setDigitValue] = useState();
    const segmentsFlow = [
        ["f", "vertical_segment"],
        ["a", "horizontal_segment"],
        ["b", "vertical_segment"],
        ["g", "horizontal_segment"],
        ["e", "vertical_segment"],
        ["c", "vertical_segment"],
        ["d", "horizontal_segment"],
    ];
    const digitToSegmentsDiary = {
        "0": [true, true, true, false, true, true, true],
        "1": [false, false, true, false, false, true, false], 
        "2": [false, true, true, true, true, false, true], 
        "3": [false, true, true, true, false, true, true], 
        "4": [true, false, true, true, false, true, false], 
        "5": [true, true, false, true, false, true, true],
        "6": [true, true, false, true, true, true, true],
        "7": [false, true, true, false, false, true, false],
        "8": [true, true, true, true, true, true, true],
        "9": [true, true, true, true, false, true, true]
    }


    useEffect(() => {

        // check if the digit is a valid number 
        if (isNaN(digit)) {
            console.error(`Input '${digit}' is not a valid number`); 
            return; 
        }

        const _digit = parseInt(digit); // convert to integer data-type 

        // ...between 0-9 
        if (_digit < 0 || _digit > 9) {
            console.error(`Input '${_digit}' must be a number between 0-9 `); 
            return; 
        }

        setDigitValue(_digit); 
    }, [])

    useEffect(() => {
        
    }, [digitValue])
    
    
        return ( 
            <div className="inline-block">
                <div className="grid_container">
                    {segmentsFlow.map((segment, index) => {
                        return (
                            <div className={`${digitToSegmentsDiary[digit][index] ? "active_segment" : "inactive_segment"} segment ${segment[0]}_segment ${segment[1]}`}></div>
                        )
                    })}
                </div>
            </div>
        )
    
}

export default DefaultDigit; 