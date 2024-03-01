import {Projects, Home, Contact} from '../pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    )
}