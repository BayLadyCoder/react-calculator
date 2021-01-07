import React from 'react';
import './NumberButton.css';


export default function NumberButton({ name, areaName }) {
  const style = {
    default: {
      gridArea: areaName,
      backgroundColor: "#3b3b3b",
      color: "#ffffff",
      border: "1px solid #3b3b3b",
      fontSize: "40px",
      borderRadius: "50%",
    },
    zero: {
      borderRadius:  "80px",
      textAlign:  "left",
      paddingLeft:  "52px",
    },
  };

  
  let theStyle = style.default;
  if(areaName === 'zero') theStyle = {...style.default, ...style.zero}

  console.log("areaName", `areaName`);

  return (
    <button style={theStyle} className="numButton">
      {name}
    </button>
  );
}