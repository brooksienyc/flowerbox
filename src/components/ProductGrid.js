import React from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto mb-8">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
