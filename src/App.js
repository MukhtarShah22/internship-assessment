import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListingPage from './pages/ListingPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
      {/* Header component for consistent navigation */}
        <Header />
        <div className="container">
      {/* Set up routes for the application */}
          <Routes>
      {/* Route for the main product listing page */}
            <Route path="/" element={<ListingPage />} />
      {/* Route for individual product pages, using URL parameters */}
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;