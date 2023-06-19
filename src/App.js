import React from 'react';
import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import data from './data/flowerData.js';




const App = () => {
  return (
    <div>
      <NavBar />
      <ProductGrid products={data} />
      <Footer />
    </div>
  );
};

export default App;
