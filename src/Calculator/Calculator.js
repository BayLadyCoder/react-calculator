import React, { useState, useEffect } from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import "./Calculator.css";

const numberList = [
  ["zero", "0"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["dot", "."],
];
const lightgreyList = ["C", "+/-", "%"];
const orangeList = ["/", "x", "-", "+", "="];

// components
// main div is a grid container
// Result <p></p>
// 3 div for buttons (lightgrey, orange, darkgrey) => grid wrapper
// Reusable number button component (darkgrey)
// Reusable operation button component (lightgrey and orange)

// main div grid container =>
// display: grid
// grid-template-rows: 2fr repeat(5, 1fr)
// grid-template-columns: repeat(4, 1fr)

// Result grid item
// grid-area: result

// Div lightgrey => grid-area: lightgrey
// display: inline-grid
// grid-template-rows: 1fr;
// grid-template-columns: repeat(3, 1fr)

// Div orange => grid-area: orange
// display: inline-grid
// grid-template-rows: repeat(5, 1fr);
// grid-template-columns: 1fr;

// Div darkgrey => grid-area: darkgrey
// display: inline-grid
// grid-template-rows: repeat(4, 1fr);
// grid-template-columns: repeat(3, 1fr);

// Reusable number button
// grid item
// grid-area: props.name

// Reusable operation button
// grid item
// grid-area: props.name
// backgroundColor:
// if(props.color === 'orange')
//   { style = {bgColor: orange, color: white}   }
// else if(props.color === 'lightgrey')
//  {  style = {bgColor: lightgrey, color: black}    }

// create useState currentValue, currentOperation, currentResult
// create function onClickNumber => concat this num to the currentValue

// create function onClickOperation("+")
// => + set currentResult = currentResult +-*/ currentValue, reset currentValue to ""
// => set currentOperation to "+"
// create function onClickOperation("=")
// => set currentValue = currentResult +-*/ currentValue, reset currentResult to 0

const style = {};

const Calculator = () => {
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState(value);
  const [percentage, setPercentage] = useState(0);

  const onClickNumber = (num) => {
    if (num === "." && value[value.length - 1] === ".") return;

    if (num === "." && value === "") {
      setValue("0".concat(num));
    } else {
      setValue(value.concat(num));
    }
    setDisplay(value.concat(num));
  };

  const calculate = (valueOrPercent) => {
    const numValue = parseFloat(valueOrPercent);
    if (result === 0) {
      setResult(numValue);
      return;
    }

    switch (operation) {
      case "-":
        setResult(result - numValue);
        break;
      case "+":
        setResult(result + numValue);
        break;
      case "x":
        setResult(result * numValue);
        break;
      case "/":
        setResult(result / numValue);
        break;
      case "=":
        break;
      case "%":
        setResult(result);
        break;
      default:
        // case "%"
        setResult(numValue);
    }
  };

  const calcPercentage = () => {
    const percent = parseFloat(value) / 100;
    if (result === 0) {
      setPercentage(percent);
    } else {
      setPercentage(result * percent);
      calculate(result * percent);
      // setResult(result + result * percent);
    }
  };

  const onClickOperation = (button) => {
    if (button === "C") {
      setOperation("");
      setResult(0);
      setDisplay(0);
    } else if (button === "+/-") {
      console.log("+/-");
    } else if (button === "%") {
      if (value !== "") calcPercentage();
      setOperation(button);
    } else {
      // if button === + - x /
      if (value !== "") calculate(value);
      setOperation(button);

      if (button === "=") setDisplay(result);
    }
    setValue("");

    // if (button === "+") {
    //   calculate();
    //   setOperation("+");
    // } else if (button === "-") {
    //   calculate();
    //   setOperation("-");
    // } else if (button === "x") {
    //   calculate();
    //   setOperation("x");
    // } else if (button === "/") {
    //   calculate();
    //   setOperation("/");
    // } else if (button === "=") {
    //   calculate();
    //   setOperation("=");
    // }
  };

  useEffect(() => {
    if (result % 1 === 0) {
      setDisplay(result);
    } else {
      setDisplay(result.toFixed(4));
    }
  }, [result]);

  useEffect(() => {
    if (percentage % 1 === 0) {
      setDisplay(percentage);
    } else {
      setDisplay(percentage.toFixed(4));
    }
  }, [percentage]);

  console.log("value", value);
  console.log("result", result);
  console.log("operation", operation);
  console.log("------------");

  return (
    <div className="container">
      <p className="result">{display || "0"}</p>
      <div className="lightgrey">
        {lightgreyList.map((name, index) => (
          <OperatorButton
            name={name}
            key={index}
            color="lightgrey"
            onClickOperation={onClickOperation}
          />
        ))}
      </div>
      <div className="orange">
        {orangeList.map((name, index) => (
          <OperatorButton
            name={name}
            key={index}
            color="orange"
            onClickOperation={onClickOperation}
          />
        ))}
      </div>
      <div className="darkgrey">
        {numberList.map((num, index) => (
          <NumberButton
            name={num[1]}
            areaName={num[0]}
            key={index}
            onClickNumber={onClickNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
