import React, { useContext } from 'react';
import { Star } from '@mui/icons-material';
import { ProductContext } from '../Context/product-context';

const ProductDetailsBox = ({ id, title, rating, image, category, price, rate, description }) => {
  const { addToCart, cartItems } = useContext(ProductContext);

  const cartItemAmount = cartItems[id];

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
    <div key={id} className='bg-white shadow-md rounded w-full h-full p-4'>
      <div className='flex flex-1 items-center gap-4'>
        <div className='cursor-pointer'>
          <img className='h-[300px] w-[300px] p-2 hover:scale-110 duration-500' src={image} alt={title} />
        </div>
        <div className='description'>
          <div className='font-base font-bold p-2 m-auto'>
            <h2>{title}</h2>
            <div className='capitalize'>
              <p>Brand: {category}</p>
            </div>
          </div>
          <div className='flex p-2 justify-between text-bold'>
            <p className='font-bold'>$ {price}</p>
            {renderRatingStars(rating)}
          </div>
          <div className='text-justify'>{description}</div>
        </div>
      </div>
      <div className='flex flex-col p-2 justify-end items-center w-full'>
        <button
          className='mt-2 bg-orange-500 text-white px-4 py-2 rounded text-center'
          onClick={() => addToCart(id)}
        >
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsBox;
