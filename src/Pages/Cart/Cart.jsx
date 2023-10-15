import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Context/product-context';
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
  const { cartItems, cartProducts, removeFromCart, removeItemFromCart } = useContext(ProductContext);
  const navigate = useNavigate();
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Fetch recommended products from the Fake Store API
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((response) => response.json())
      .then((data) => {
        setRecommendedProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching recommended products:', error);
      });
  }, []);

  // Calculate the subtotal price based on cart items
  const calculateSubtotal = () => {
    let subtotal = 0;
    Object.keys(cartItems).forEach((productId) => {
      const product = cartProducts.find((p) => p.id === parseInt(productId, 10));
      const quantity = cartItems[productId];
      if (product) {
        subtotal += product.price * quantity;
      }
    });
    return subtotal;
  };

  return (
    <div className='cart'>
      <div className='mb-4'>
        <h1 className='text-2xl font-semibold text-center justify-center capitalize'>
          My Cart items
        </h1>
      </div>
      <div>
        {/* Existing cart items rendering */}
        {Object.keys(cartItems).map((productId) => {
          const product = cartProducts.find((p) => p.id === parseInt(productId, 10));
          const quantity = cartItems[productId];

          if (quantity > 0 && product) {
            return (
              <div key={productId} className='cart-item border p-4 mb-2 flex flex-1 gap-6 justify-between'>
                <div className='cursor-pointer'>
                  <img className='h-[200px] w-[200px] p-2 hover:scale-110 duration-500' src={product.image} />
                </div>
                <div>
                  <p className='text-lg font-semibold'>{product.title}</p>
                  <p className='text-gray-600'>Quantity: {quantity}</p>
                  <p className='text-gray-600'>Price: ${product.price}</p>
                </div>
                <div>
                  <button
                    className='mt-2 bg-red-500 text-white px-4 py-2 rounded'
                    onClick={() => removeItemFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
      <div className='mt-4'>
        <p className='text-xl font-semibold text-right pr-4'>
          Subtotal: ${calculateSubtotal()}
        </p>
        <div className='flex justify-center'>
          <button
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
            onClick={() => navigate('/')}>
            Continue Shopping
          </button>
          <button
            className='mt-2 ml-4 bg-green-500 text-white px-4 py-2 rounded'
            onClick={() => navigate('/profile')}>
            Checkout
          </button>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4 text-center'>Products You May Like</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {recommendedProducts.map((product) => (
            <Link key={product.id} to={`/ProductDetails/${product.id}`} className='block'>
            <div className='bg-white shadow-md rounded p-4'>
              <img
                className='h-[150px] w-[150px] mx-auto'
                src={product.image}
                alt={product.title}
              />
              <h2 className='mt-2 text-lg font-semibold'>{product.title}</h2>
              <p className='mt-1 font-bold text-orange-500'>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;