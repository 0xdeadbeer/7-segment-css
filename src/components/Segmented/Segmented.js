import { React, useState, useEffect } from "react"; 
import DefaultDigit from "../DefaultDigit/DefaultDigit"

const Segmented = ({value, onClick, title}) => {
    return value.split("").map((char, index) => {
        return <DefaultDigit title={title} onClick={onClick} key={index} digit={char} />
    })
}

export default Segmented; 