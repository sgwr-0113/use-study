import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Index } from '../pages/Index';
import { Memo } from '../pages/Memo';
import { Ref } from '../pages/Ref';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </BrowserRouter>
  );
};
