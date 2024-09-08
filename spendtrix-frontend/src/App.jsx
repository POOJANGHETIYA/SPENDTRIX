import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ExpenseForm from './pages/ExpenseForm';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;