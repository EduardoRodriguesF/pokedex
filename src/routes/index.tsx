import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Entry from '../pages/Entry';
import Pokedex from '../pages/Pokedex';

const PokedexRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="entry/:entryId" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PokedexRoutes;