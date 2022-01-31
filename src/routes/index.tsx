import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Index } from '../pages/Index'
import { Effect } from '../pages/Effect'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
    </BrowserRouter>
  )
}
