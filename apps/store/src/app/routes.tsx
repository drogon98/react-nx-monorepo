import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Contact from './components/Contact';
// import Home from './components/Home';
const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));

type Props = {};

export default function routes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
