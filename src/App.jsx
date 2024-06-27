import React from 'react';

import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Cutlist from './comp/Cutlist';
import Calculator from './comp/Calculator';
import { CalculatorProvider } from './context/CalculatorContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Calculator />,
  },
  {
    path: '/cutlist',
    element: <Cutlist />,
  },
]);

function App() {
  return (
    <CalculatorProvider>
      <RouterProvider router={router} />
    </CalculatorProvider>
  );
}

export default App;
