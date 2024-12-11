import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log("Value entered:", e.target.value);
  };

  const handleButtonClick = () => {
    console.log("The button has been clicked!");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter some text..."

        onChange={handleInputChange}
        style={{ marginRight: "10px" }}
      />

      <button onClick={handleButtonClick}> Click me </button>
    </div>
  );
};

export default App;
