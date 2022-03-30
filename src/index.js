import React from "react";
import ReactDOM from "react-dom";

const fName = "Rosario";
const lName = "Tarabocchia";

const num = 13;

ReactDOM.render(
  <div>
    {/* <h1>Hello {fName + " " + lName}</h1> */}
    {/* <h1>Hello {fName} {lName}</h1> */}
    <h1>Hello {`${fName} ${lName}`}</h1>  <p>Your lucky number is {num}!</p>
  </div>,
  document.getElementById("root")
);
