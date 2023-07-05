import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    
    return (
        <div className="sidebar bg-gray-200 p-4">
        <ul>
            <li className='pb-2 mt-1'>
            <Link to="/" className="bg-blue-400 hover:bg-blue-600 text-white font-bold  px-4 rounded">Home</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">DNA</h3>
            <li className='pb-2 mt-1'>
            <Link to="/dna_ligation"  className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">Ligation</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/dna_ds_massmoles" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">ds: Mass - Moles</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/dna_ds_massends" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">ds: Mass - Ends</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/dna_ss_massmoles"  className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">ss: Mass - Moles</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">RNA</h3>
            <li className='pb-2 mt-1'>
            <Link to="/rna_ss_massmoles" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">ss: Mass - Moles</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">Protein</h3>
            <li className='pb-2 mt-1'>
            <Link to="/protein_massmoles" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">Mass - Moles</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">General</h3>
            <li className='pb-2 mt-1'>
            <Link to="/od" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">OD_260</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/molarity" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">Dilution</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/dilution" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">Molarity</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">Genemo Editing</h3>
            <li className='pb-2 mt-1'>
            <Link to="/sgrna" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">sgRNA Designer</Link>
            </li>
            <h3 className="pl-2 pt-2 bold">qPCR</h3>
            <li className='pb-2 mt-1'>
            <Link to="/ngslibrary" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">NGS Library Quant</Link>
            </li>
            <li className='pb-2 mt-1'>
            <Link to="/qpcr" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">General qPCR</Link>
            </li>
            <br/>
            <br/>
            <h3 className="pl-2 pt-2 bold">PCR Master</h3>
            <li className='pb-2 mt-1'>
            <Link to="/pcr" className="bg-blue-400 hover:bg-blue-600 text-white  py-2 px-3 rounded">PCR</Link>
            </li>
        </ul>
        </div>
    );
  };
  
export default Sidebar