import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListingPage from './pages/ListingPage';
import ProductPage from './pages/ProductPage';

function App() {
 return(
  <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  </Router>
 );
}

export default App;
