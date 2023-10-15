import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Star } from '@mui/icons-material';

function Jewelery() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [categoryName]);

  const renderRatingStars = (rating) => {
    const starIcons = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      starIcons.push(
        <span key={i} className={i < rating.rate ? 'text-yellow-400' : 'text-gray-300'}>
          <Star />
        </span>
      );
    }

    return (
      <div className='flex items-center'>
        {starIcons}
        <span className='ml-1 text-gray-500'>({rating.count})</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link key={product.id} to={`/ProductDetails/${product.id}`} className="block">
          <div className="bg-white shadow-md rounded p-4">
            <img className="h-[150px] w-[150px] mx-auto" src={product.image} alt={product.title} />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="mt-1 font-bold text-orange-500">${product.price}</p>
            <div className="flex items-center mt-1 text-sm">
              {renderRatingStars(product.rating)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Jewelery;
