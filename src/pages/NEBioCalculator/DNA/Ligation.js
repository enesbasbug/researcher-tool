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
    const convertedNum1 = convertedNum(number1, unit1); // Insert DNA length
    const convertedNum2 = convertedNum(number2, unit2); // Vector DNA length
    // const convertedNum3 = convertedNum(number3, unit3); // Vector DNA mass

    const resultInMeters = (number3 / convertedNum2) * convertedNum1;
    setResult(resultInMeters);
  };

  const convertedNum = (value, unit) => {
    switch (unit) {
      // DNA Length
      case 'bp':
        return value * 1;
      case 'kb':
        return value * 1000;
      
      // DNA Mass
      // case 'g':
      //   return value * 1;
      // case 'mg':
      //   return value * 1000;
      // case 'ug':
      //   return value * 1000000;
      // case 'ng':
      //   return value * 1000000000;
      // case 'pg':
      //   return value * 1000000000000;
      // case 'fg':
      //   return value * 1000000000000000;
      default:
        console.log(console.error("Any error maybeeee?"))
        return value;

    }
  };

  return (
    <div className=''>
        <h2 className='mb-2 font-bold '>Ligation Page</h2>
        <p>This tool will calculate the mass of insert required at several molar insert:vector ratios in the range needed for typical ligation reactions.</p>
      <div className='flex flex-row mt-10'>
        <div className="flex flex-col gap-y-3">
          <div className="w-auto">
            <h3>Insert DNA length:</h3>
            <label>
              <input
                  className="mr-2 p-1"
                type="number"
                value={number1}
                onChange={handleNumber1Change}
              />
            </label>
            <select value={unit1} onChange={handleUnit1Change}>
              <option value="bp">bp</option>
              <option value="kb">kb</option>
            </select>
          </div>
          <div className="w-auto">
            <h3>Vector DNA length:</h3>
            <label>
              <input
                  className="mr-2 p-1"
                type="number"
                value={number2}
                onChange={handleNumber2Change}
              />
            </label>
            <select value={unit2} onChange={handleUnit2Change}>
              <option value="bp">bp</option>
              <option value="kb">kb</option>
            </select>
          </div>
          <div className="w-auto">
            <h3>Vector DNA mass:</h3>
            <label>
            <input
                className="mr-2 p-1"
                type="number"
                value={number3}
                onChange={handleNumber3Change}
              />
            </label>
            <select value={unit3} onChange={handleUnit3Change}>
              {/* <option value="g">g</option> */}
              {/* <option value="mg">mg</option> */}
              {/* <option value="ug">μg</option> */}
              <option value="ng">ng</option>
              {/* <option value="pg">pg</option>
              <option value="fg">fg</option> */}
            </select>
          </div>
        </div>
        <div className="ml-10 flex flex-col ">
          <div className="w-auto flex flex-col gap-y-2 p-1 bg-gray-400">
            <h3>Multiplier:</h3>
            <p className='border bg-blue-200 p-2'> {(result*1).toFixed(2)} ng (1:1)</p>
            <p className='border bg-blue-200 p-2'> {(result*2).toFixed(2)} ng (2:1)</p>
            <p className='border bg-blue-200 p-2'> {(result*3).toFixed(2)} ng (3:1)</p>
            <p className='border bg-blue-200 p-2'> {(result*5).toFixed(2)} ng (5:1)</p>
            <p className='border bg-blue-200 p-2'> {(result*7).toFixed(2)} ng (7:1)</p>
            
          </div>
        </div>
      </div>
      <div className="w-1/5 mt-5 p-2 font-bold border bg-orange-200">
        <button onClick={calculate}>Calculate</button>
        {/* <h3>Result: {result} m</h3> */}
      </div>
    </div>
  );
};

export default DSMassEnds;

