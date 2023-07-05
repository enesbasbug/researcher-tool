import React, { useState } from 'react';

const SSMassMoles = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [result, setResult] = useState('');
  const [precisionX, setPrecisionX] = useState('integer');
  const [precisionY, setPrecisionY] = useState('integer');
  const [precisionZ, setPrecisionZ] = useState('integer');

  const calculate = () => {
    const valueX = parseFloat(x);
    const valueY = parseFloat(y);
    const valueZ = parseFloat(z);

    let divisionResult;

    if (precisionX === 'integer' && precisionY === 'integer' && precisionZ === 'integer') {
      divisionResult = Math.floor(valueX / valueY / valueZ);
    } else {
      divisionResult = valueX / valueY / valueZ;
    }

    setResult(divisionResult);
  };

  return (
    <div>
      <h2>Calculate Division</h2>
      <div>
        <label>
          X:
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
        <label>
          Precision X:
          <select value={precisionX} onChange={(e) => setPrecisionX(e.target.value)}>
            <option value="integer">Integer</option>
            <option value="float">Float</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Y:
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
        <label>
          Precision Y:
          <select value={precisionY} onChange={(e) => setPrecisionY(e.target.value)}>
            <option value="integer">Integer</option>
            <option value="float">Float</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Z:
          <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
        </label>
        <label>
          Precision Z:
          <select value={precisionZ} onChange={(e) => setPrecisionZ(e.target.value)}>
            <option value="integer">Integer</option>
            <option value="float">Float</option>
          </select>
        </label>
      </div>
      <button onClick={calculate}>Calculate</button>

      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
};

export default SSMassMoles;
