import {About, Hobies, Projects, Home} from '../pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/hobbies' element={<Hobies />} />
      </Routes>
    )
}