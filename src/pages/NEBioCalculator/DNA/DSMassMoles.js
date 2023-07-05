import React, { useState } from 'react';

const DSMassMoles = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Subtraction Page</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter the first number"
          className="border p-2"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the second number"
          className="border p-2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <p className="font-bold">Result:</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default DSMassMoles;
