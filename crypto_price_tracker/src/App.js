import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/reports' element={Reports} />
          <Route path='/products' element={Products} />
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
