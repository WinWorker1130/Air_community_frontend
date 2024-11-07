import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppRouters from './routes';

function App() {
  return (
    <div>
      <AppRouters />
    </div>
  );
}

export default App;