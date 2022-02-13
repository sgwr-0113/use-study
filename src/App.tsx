import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from 'pages/Index';
import { Memo } from 'pages/Memo';
import { Ref } from 'pages/Ref';
import { Header } from 'components/shared/Header';
import { Footer } from 'components/shared/Footer';

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="pt-12 w-screen sm:pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/ref" element={<Ref />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
