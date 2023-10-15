import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@mui/icons-material';
import { useParams } from 'react-router-dom';


function WomenClothing() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const renderRatingStars = (rating) => {
    const starIcons = [];
    const fullStars = Math.floor(rating.rate);
    const remainingStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<span key={i} className='text-yellow-400'><Star/></span>);
    }

    if (rating.rate - fullStars >= 0.5) {
      starIcons.push(<span key='half' className='text-yellow-400'><Star/></span>);
    }

    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<span key={`empty-${i}`} className='text-gray-300'><Star/></span>);
    }

    return (
      <div className='flex items-center'>
        {starIcons}
        <span className='ml-1 text-gray-500'>({rating.count})</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Link key={product.id} to={`/ProductDetails/${product.id}`} className="block">
          <div className="bg-white shadow-md rounded p-4">
            <img className="h-[150px] w-[150px] mx-auto" src={product.image} alt={product.title} />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="mt-1 font-bold text-orange-500">${product.price}</p>
            <div className="flex items-center mt-1 text-sm">
              {renderRatingStars(product.rating)}
              <span className="ml-1 text-gray-500">({product.rating.count})</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WomenClothing;