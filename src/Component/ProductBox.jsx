import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@mui/icons-material';
import { ProductContext } from '../Context/product-context';

function ProductBox({ id, title, image, price, rate, category, rating }) {
  const { addToCart } = useContext(ProductContext);

  const renderRatingStars = (rating) => {
    const starIcons = [];
    const fullStars = Math.min(5, Math.floor(rating.rate)); // Limit to 5 stars

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(
        <span key={i} className='text-yellow-400'>
          <Star />
        </span>
      );
    }

    if (rating.rate - fullStars >= 0.5) {
      starIcons.push(
        <span key='half' className='text-yellow-400'>
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
    <Link to={`/ProductDetails/${id}`}>
      <div key={id} className='bg-white shadow-md rounded w-full h-full p-4'>
        <div className='flex items-center'>
          <div className='cursor-pointer'>
            <img className='h-[200px] w-[200px] p-2 hover:scale-110 duration-500' src={image} alt={title} />
          </div>
          <div className='description'>
            <div className='font-base font-bold p-2 m-auto'>
              <h2>{title}</h2>
              <div className='capitalize'>
                <p>Brand: {category}</p>
              </div>
            </div>
            <div className='flex p-2 justify-between text-bold'>
              <p>$ {price}</p>
              <div className='flex'>{renderRatingStars(rating)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductBox;





