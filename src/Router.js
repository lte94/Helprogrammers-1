import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import AddQuestion from './pages/AddQuestion';
import Question from './pages/Question';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddQuestion />} />
        <Route path="/question-id" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
