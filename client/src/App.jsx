import { useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';

import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/home' element={<RegisterPage />}></Route>
        <Route path='/genres' element={<RegisterPage />}></Route>
        <Route path='/carousel' element={<RegisterPage />}></Route>
        <Route path='/dashboard' element={<RegisterPage />}></Route>
        <Route path='/movies' element={<RegisterPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
