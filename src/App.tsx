import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from 'pages/Index';
import { Memo } from 'pages/Memo';
import { Ref } from 'pages/Ref';
import { Header } from 'components/shared/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 w-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/ref" element={<Ref />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
