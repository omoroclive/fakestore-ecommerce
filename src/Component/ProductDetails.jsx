import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsBox from './ProductDetailsBox';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Fetch product details based on the productId
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        // Fetch similar products based on the product's category
        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then((response) => response.json())
          .then((similarData) => {
            // Exclude the current product from the list of similar products
            const filteredSimilarProducts = similarData.filter((p) => p.id !== id);
            setSimilarProducts(filteredSimilarProducts);
          })
          .catch((error) => console.error('Error fetching similar products:', error));
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!productDetails) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div key={id}>
        <ProductDetailsBox {...productDetails} />
      </div>
      <h3 className='mt-4 text-lg font-semibold text-center'>Similar Products</h3>
      <div className='grid grid-cols-3 gap-4 mt-2'>
        {similarProducts.map((similarProduct) => (
          <a key={similarProduct.id} href={`/productDetails/${similarProduct.id}`} className='block bg-white shadow-md rounded p-2'>
            <img className='h-20 w-20 mx-auto' src={similarProduct.image} alt={similarProduct.title} />
            <p className='mt-2 text-sm'>{similarProduct.title}</p>
            <p className='mt-1 text-sm text-gray-500'>Price: ${similarProduct.price}</p>
            <div className='flex items-center mt-1 text-sm'>
              <span className='text-yellow-400'></span>
              <span className='ml-1 text-gray-500'>{similarProduct.rate} ({similarProduct.rating.count})</span>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
};

export default ProductDetails;
