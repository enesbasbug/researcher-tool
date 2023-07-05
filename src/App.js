import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/NEBioCalculator/HomePage';
import Sidebar from './pages/NEBioCalculator/Sidebar';
// DNA
import Ligation from './pages/NEBioCalculator/DNA/Ligation';
import DSMassMoles from './pages/NEBioCalculator/DNA/DSMassMoles';
import DSMassEnds from './pages/NEBioCalculator/DNA/DSMassEnds';
import SSMassMoles from './pages/NEBioCalculator/DNA/SSMassMoles';
// RNA
import RNASSMassMoles from './pages/NEBioCalculator/RNA/SSMassMoles';
// Protein
import MassMoles from './pages/NEBioCalculator/Protein/MassMoles';
// General
import OD from './pages/NEBioCalculator/General/OD';
import Dilution from './pages/NEBioCalculator/General/Dilution';
import Molarity from './pages/NEBioCalculator/General/Molarity';
// Genemo Editing
import SGRNA from './pages/NEBioCalculator/GenemoEditing/SGRNA';
// qPCR
import NGSLibrary from './pages/NEBioCalculator/QPCR/NGSLibrary';
import QPCR from './pages/NEBioCalculator/QPCR/GeneralqPCR';

// PCR Master
import PCR from './pages/PCRMaster/PCR';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="w-1/4 bg-gray-200">
          {/* NEBioCalculator */}
          <Sidebar />
        </div>
        <div className="flex-1 p-4 bg-slate-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* DNA */}
            <Route path="/dna_ligation" element={<Ligation />} />
            <Route path="/dna_ds_massmoles" element={<DSMassMoles />} />
            <Route path="/dna_ds_massends" element={<DSMassEnds />} />
            <Route path="/dna_ss_massmoles" element={<SSMassMoles />} />
            {/* RNA */}
            <Route path="/rna_ss_massmoles" element={<RNASSMassMoles />} />
            {/* Protein */}
            <Route path="/protein_massmoles" element={<MassMoles />} />
            {/* General */}
            <Route path="/od" element={<OD />} />
            <Route path="/molarity" element={<Molarity />} />
            <Route path="/dilution" element={<Dilution />} />
            {/* Genemo Editing */}
            <Route path="/sgrna" element={<SGRNA />} />
            {/* qPCR */}
            <Route path="/ngslibrary" element={<NGSLibrary />} />
            <Route path="/qpcr" element={<QPCR />} />

            {/* Master PCR */}
            <Route path="/pcr" element={<PCR />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
