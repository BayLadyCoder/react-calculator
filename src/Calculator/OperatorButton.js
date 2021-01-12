import React from "react";

export default function OperatorButton({ name, color, onClickOperation }) {
  const style = {
    orange: {
      backgroundColor: "#ff9d00",
      color: "#ffffff",
      border: "1px solid #ff9d00",
      fontSize: "40px",
      borderRadius: "50%",
    },
    lightgrey: {
      backgroundColor: "#cccccc",
      border: "1px solid #cccccc",
      fontSize: "40px",
      borderRadius: "50%",
    },
  };

  let theStyle = style.lightgrey;
  if (color === "orange") theStyle = style.orange;

  return (
    <button
      style={theStyle}
      className="operatorButton"
      onClick={() => onClickOperation(name)}
    >
      {name}
    </button>
  );
}
