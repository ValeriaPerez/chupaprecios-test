import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/Navbar';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Routes>
        <Route exactly path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
