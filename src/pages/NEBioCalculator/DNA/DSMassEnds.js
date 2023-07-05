import React, { useState } from 'react';

const DSMassEnds = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [unit1, setUnit1] = useState('mm');
  const [unit2, setUnit2] = useState('mm');
  const [unit3, setUnit3] = useState('mm');
  const [result, setResult] = useState('');

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  const handleNumber3Change = (e) => {
    setNumber3(e.target.value);
  };

  const handleUnit1Change = (e) => {
    setUnit1(e.target.value);
  };

  const handleUnit2Change = (e) => {
    setUnit2(e.target.value);
  };

  const handleUnit3Change = (e) => {
    setUnit3(e.target.value);
  };

  const calculate = () => {
    const number1InMeters = convertToMeters(number1, unit1);
    const number2InMeters = convertToMeters(number2, unit2);
    const number3InMeters = convertToMeters(number3, unit3);

    const resultInMeters = number1InMeters * number2InMeters * number3InMeters;
    setResult(resultInMeters);
  };

  const convertToMeters = (value, unit) => {
    switch (unit) {
      case 'mm':
        return value / 1000;
      case 'cm':
        return value / 100;
      case 'dm':
        return value / 10;
      default:
        return value;
    }
  };

  return (
    <div className=''>
        <h2>Multiplication Page</h2>
      <div className='flex flex-row'>
        <div className="flex flex-col">
          <div className="w-1/3">
            <h3>Number 1:</h3>
            <label>
              <input
                  className="mr-2 p-1"
                type="number"
                value={number1}
                onChange={handleNumber1Change}
              />
            </label>
            <select value={unit1} onChange={handleUnit1Change}>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="dm">dm</option>
            </select>
          </div>
          <div className="w-1/3">
            <h3>Number 2:</h3>
            <label>
              <input
                  className="mr-2 p-1"
                type="number"
                value={number2}
                onChange={handleNumber2Change}
              />
            </label>
            <select value={unit2} onChange={handleUnit2Change}>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="dm">dm</option>
            </select>
          </div>
          <div className="w-1/3">
            <h3>Number 3:</h3>
            <label>
            <input
                className="mr-2 p-1"
                type="number"
                value={number3}
                onChange={handleNumber3Change}
              />
            </label>
            <select value={unit3} onChange={handleUnit3Change}>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="dm">dm</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-auto flex flex-col  bg-red-400">
            <h3>Multiplier:</h3>
            <p>{result*1} (1:1)</p>
            <p>{result*2} (2:1)</p>
            <p>{result*3} (3:1)</p>
            <p>{result*5} (5:1)</p>
            <p>{result*7} (7:1)</p>
            
          </div>
          <div className="w-2/3">
            <button onClick={calculate}>Calculate</button>
            {/* <h3>Result: {result} m</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSMassEnds;

