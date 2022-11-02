import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import Navbar from './functionBased/components/Navbar';
import About from './functionBased/pages/About';
import SinglePage from './functionBased/pages/SinglePage';
import NotMatch from './functionBased/pages/NotMatch';
import './functionBased/App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
