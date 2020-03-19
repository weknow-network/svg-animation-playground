import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { ReactComponent as OneLine } from "./sample.svg";

function App() {
  // var path = document.querySelector('.path');
  // var length = path.getTotalLength();
  // console.log(length);

  return (
    <>
      <OneLine width={2081} height={793} />
    </>
  );
}

export default App;
