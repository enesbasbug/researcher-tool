import React, { useState } from 'react';

const SSMassMoles = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [unit1, setUnit1] = useState('nt');
  const [unit2, setUnit2] = useState('g');

  const handleNumber1Change = (e) => {
    setNum1(e.target.value)
  }

  const handleNumber2Change = (e) => {
    setNum2(e.target.value)
  }

  const handleUnit1Change = (e) => {
    setUnit1(e.target.value)
  }

  const handleUnit2Change = (e) => {
    setUnit2(e.target.value)
  }

  const calculateMolesOfssRNA = (massOfssRNA, lengthOfssRNA) => {
    const molarMassssRNA = 321.47; // g/mol
    const molarMassWater = 18.02; // g/mol

    const convertedMass = convertedNum(massOfssRNA, unit1); // Insert DNA length
    const convertedLength = convertedNum(lengthOfssRNA, unit2); // Vector DNA length

    const molesOfssRNA = convertedMass / ((convertedLength * molarMassssRNA) + molarMassWater);
    return molesOfssRNA * 1000000; // Convert to umol
  }

  // Calculate moles of ssRNA ends
  function calculateMolesOfssRNAEnds(molesOfssRNA) {
    return molesOfssRNA;
  }

  // Calculate RNA copy number
  function calculateRNACopyNumber(molesOfssRNA) {
    const avogadrosNumber = 6.022e23; // molecules/mol

    const RNAcopyNumber = molesOfssRNA * avogadrosNumber;
    return RNAcopyNumber.toExponential(3);
  }

  const convertedNum = (value, unit) => {
    switch (unit) {
      // DNA Length
      case 'nt':
        return value;
      case 'kb':
        return value * 1000;
      
      // DNA Mass
      case 'g':
        return value * 1;
      case 'mg':
        return value * 1000;
      case 'ug':
        return value * 1000000;
      case 'ng':
        return value * 1000000000;
      case 'pg':
        return value * 1000000000000;
      case 'fg':
        return value * 1000000000000000;
      default:
        console.log(console.error("Any error maybeeee?"))
        return value;

    }
  };

  const molesOfssRNA = calculateMolesOfssRNA(num2, num1);
  const molesOfssRNAEnds = calculateMolesOfssRNAEnds(molesOfssRNA);
  const RNAcopyNumber = calculateRNACopyNumber(molesOfssRNA);

  // Determine the unit and format for displaying the results
  const unitDisplay = unit1 === 'nt' ? ['amol', 'fmol', 'pmol', 'nmol', 'umol', 'mmol'] : ['ag', 'mg', 'μg', 'ng', 'pg', 'fg'];
  const formattedMolesOfssRNA = num1 && num2 ? molesOfssRNA.toFixed(2) + ' ' + unitDisplay[4] : '-----';
  const formattedMolesOfssRNAEnds = num1 && num2 ? molesOfssRNAEnds.toFixed(2) + ' ' + unitDisplay[4] : '-----';
  const formattedRNAcopyNumber = num1 && num2 ? RNAcopyNumber + ' molecules' : '-----';



  return (
    <div className=''>
      <h2 className='mb-2 font-bold '>ssRNA: Mass to Moles Convertor</h2>
      <p>This tool will convert ssRNA mass to moles of RNA, moles of RNA ends, and number of RNA molecules
        and also convert moles of ssRNA to mass of ssRNA.</p>
      <div className='flex flex-row mt-10'>
        <div className="flex flex-col gap-y-3">
          <div className="w-auto">
            <h3>RNA length:</h3>
            <label>
              <input
                className="mr-2 p-1"
                type="number"
                value={num1}
                onChange={handleNumber1Change}
              />
            </label>
            <select value={unit1} onChange={handleUnit1Change}>
              <option value="nt">nt</option>
              <option value="kb">kb</option>
            </select>
          </div>
          <div className="w-auto">
            <h3>RNA Mass:</h3>
            <label>
              <input
                className="mr-2 p-1"
                type="number"
                value={num2}
                onChange={handleNumber2Change}
              />
            </label>
            <select value={unit2} onChange={handleUnit2Change}>
              <option value="g">g</option>
              <option value="mg">mg</option>
              <option value="ug">μg</option>
              <option value="ng">ng</option>
              <option value="pg">pg</option>
              <option value="fg">fg</option>
            </select>
          </div>
        </div>
        <div className="ml-10 flex flex-col ">
          <div className="w-auto flex flex-col gap-y-1 p-1 bg-gray-400">
            <h3 className='font-bold'>Moles of RNA</h3>
            <p className='border bg-blue-200 p-2'>{formattedMolesOfssRNA}</p>
            <h3 className='font-bold mt-2'>Moles of RNA 3'/5' ends</h3>
            <p className='border bg-blue-200 p-2'>{formattedMolesOfssRNAEnds}</p>
            <h3 className='font-bold mt-2'>RNA Copy Number</h3>
            <p className='border bg-blue-200 p-2'>{formattedRNAcopyNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSMassMoles;
