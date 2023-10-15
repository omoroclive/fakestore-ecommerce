import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const categoryStyle =
    'h-[200px] w-[200px] rounded bg-slate-200 flex items-center justify-between p-2 overflow-hidden gap-2';
  const headingStyle = 'font-black font-bold block text-justify mx-auto items-center border-b-[1px] hover:border-orange-500 capitalize';

  return (
    <div className='w-[100%] flex flex-1 overflow-hidden m-4 p-4 justify-between mt-2 mb-2 bg-white rounded shadow-md gap-2 items-center text-center'>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category}`} className='block text-center'>
          <div>
            <img src={`https://source.unsplash.com/200x200/?${category}`} alt={category} className={categoryStyle} />
            <h2 className={headingStyle}>{category}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;