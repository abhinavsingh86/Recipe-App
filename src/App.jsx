import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ViewRecipe from './Pages/ViewRecipe';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
       
        {/* Dynamic route for each recipe */}
        <Route path="/view" element={<ViewRecipe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;