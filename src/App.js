import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
 return(
  <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<div>Listing Page</div>} />
      <Route path="/product/:id" element={<div>Product Page</div>} />
      </Routes>
    </div>
  </Router>
 );
}

export default App;
