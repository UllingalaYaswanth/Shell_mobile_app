import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Metrics from './Metrics';
import DiagnosticScreen from './DiagnosticCard';
import Verification from './Verification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/sensors" element={<DiagnosticScreen />} />
        <Route path="/verfication" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
