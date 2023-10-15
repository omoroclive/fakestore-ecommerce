import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchData }) => {
  if (!searchData) {
    return null; 
  }
  return (
    <ul className='search-results grid gap-4 mt-4'>
      {searchData.map((product) => (
        <Link to={`/ProductDetails/${product.id}`} key={product.id} className='search-result block'>
          <li className='flex items-center'>
            <div className='image-container w-20 h-20'>
              <img src={product.image} alt={product.title} className='product-image w-full h-full object-cover' />
            </div>
            <p className='ml-2'>{product.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SearchResults;
