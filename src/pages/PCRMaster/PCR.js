import React, { useState } from 'react';

const PCR = () => {
  // State for storing input values
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    // Add more input state variables as needed
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
// Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve the values of the first seven inputs and the eighth input
    const { input1, input2, input3, input4, input5, input6, input7, input8 } = inputs;
  
    // Calculate the multiplication for each input
    const result = parseFloat(input8); // Initialize the result with the value of the eighth input
    const CalculateOutput = {
      input9: (parseFloat(input1) * result).toString(),
      input10: (parseFloat(input2) * result).toString(),
      input11: (parseFloat(input3) * result).toString(),
      input12: (parseFloat(input4) * result).toString(),
      input13: (parseFloat(input5) * result).toString(),
      input14: (parseFloat(input6) * result).toString(),
      input15: (parseFloat(input7) * result).toString(),
    };
  
    // Calculate the sum of input1 to input7
    const sum1 = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) +
      parseFloat(input4) + parseFloat(input5) + parseFloat(input6) + parseFloat(input7);
  
    // Calculate the sum of input9 to input16
    const sum2 = parseFloat(CalculateOutput.input9) + parseFloat(CalculateOutput.input10) +
      parseFloat(CalculateOutput.input11) + parseFloat(CalculateOutput.input12) +
      parseFloat(CalculateOutput.input13) + parseFloat(CalculateOutput.input14) +
      parseFloat(CalculateOutput.input15)
  
    // Set the multiplied values into the seven inputs on the right side
    setInputs((prevState) => ({
      ...prevState,
      input9: (parseFloat(input1) * result).toString(),
      input10: (parseFloat(input2) * result).toString(),
      input11: (parseFloat(input3) * result).toString(),
      input12: (parseFloat(input4) * result).toString(),
      input13: (parseFloat(input5) * result).toString(),
      input14: (parseFloat(input6) * result).toString(),
      input15: (parseFloat(input7) * result).toString(),
      input16: sum1.toString(),
      input17: sum2.toString(),
    }));
  };
  


  // Function to handle reset button click
  const handleReset = () => {
    setInputs({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      // Reset other input state variables as needed
    });
  };

  const labelNames = [
    'Template DNA',
    'PCR Buffer',
    'Forward Primer',
    'Reverse Primer',
    'dNTP mix',
    'DNA Polymerase',
    'PCR grade Water',
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div >
      {/* Left half */}
    <p className='font-bold mb-5 flex justify-center pr-10 text-xl'>PCR Master Mix Calculator</p>
    <div className="flex">
    <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          {/* Labels and Inputs */}
        <p className='font-bold mb-5 flex justify-center pr-10 text-xl'>Composition of PCR reaction</p>
          
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="mb-4">
                <label htmlFor={`input${index + 1}`} className="block mb-2">{`${labelNames[index]}`}</label>
                <input
                  type="text"
                  id={`input${index + 1}`}
                  name={`input${index + 1}`}
                  value={inputs[`input${index + 1}`]}
                  onChange={handleInputChange}
                  className="w-2/3 px-4 py-2 border border-gray-300 rounded-md"
                /> µl
                
            </div>
            
          ))} 
          <label htmlFor={`input${8}`} className="block mb-2 ">Total Number of Reactions</label>
                <input
                  type="text"
                  id="input8"
                  name="input8"
                  value={inputs[`input${8}`]}
                  onChange={handleInputChange}
                  className="w-2/3 px-4 py-2 border border-gray-300 rounded-md"
                />
          
          {/* Buttons */}
          <div className="flex justify-end m-10">
            <button type="button" onClick={handleReset} className="px-4 py-2 mr-2 bg-gray-400 rounded-md">Reset</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Calculate</button>
            <button type="button" onClick={handlePrint} className="px-4 py-2 ml-2 bg-green-500 text-white rounded-md">Print</button>
          </div>
        
        </form>
      </div>

      {/* Right half */}
      <div className="w-1/2 p-4">
        {/* Labels and Inputs */}
        <p className='font-bold mb-5 flex justify-center text-xl'>PCR MasterMix Formulation for  <span className="text-red-500 border px-2"> {inputs[`input${8}`]} </span>  PCR reactions</p>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`input${index + 9}`} className="block mb-2">{`${labelNames[index]}`}</label>
            <input
              type="text"
              id={`input${index + 9}`}
              name={`input${index + 9}`}
              value={inputs[`input${index + 9}`]}
              onChange={handleInputChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />   µl
            
          </div>
        ))}
        <br/>
        <br/>
        <br/>
            <label htmlFor={`input${16}`} className="block mt-2 font-bold">Total PCR Reaction Volume</label>
            <input
                type="text"
                id="input16"
                name="input16"
                value={inputs[`input${16}`]}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />  µl
          
            <label htmlFor={`input${17}`} className="block mt-2 font-bold">TOTAL VOLUME</label>
            <input
                type="text"
                id="input17"
                name="input17"
                value={inputs[`input${17}`]}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />  µl

      </div>
    </div>
    </div>
  );
};

export default PCR;
