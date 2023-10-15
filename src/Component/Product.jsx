import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProductBox from './ProductBox';


function Product() {
    const API_url = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(API_url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {products?.map((product, id) => (
                <ProductBox {...product} key={id} />
            ))}
        </div>
    );
}

export default Product;