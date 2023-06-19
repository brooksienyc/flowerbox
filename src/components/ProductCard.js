import React from 'react';

const ProductCard = ({ name, image, price, tags }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-md">
      <img src={image} alt={name} className="w-full h-auto mb-4" />
      <div className="flex w-full justify-between">
      <h3 className="text-lg font-bold mr-4">{name}</h3>
      <p className="pink-squares text-white font-bold">${price}</p>
      </div>
      <ul className="mt-2 w-full">
        {tags.map((tag) => (
          <li key={tag} className="inline-block px-2 py-1 mr-1 text-xs text-gray-500 bg-gray-200 rounded">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
