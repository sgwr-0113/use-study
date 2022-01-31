import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Index } from '../pages/Index'
import { Effect } from '../pages/Effect'
import { Ref } from '../pages/Ref'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </BrowserRouter>
  )
}
