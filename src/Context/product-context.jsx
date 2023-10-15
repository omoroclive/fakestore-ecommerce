import React, { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext(null)




export const ProductContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [cartProducts, setCartProducts] = useState([]);

    useEffect((id) => {
        // Fetch products from the FakeStore API
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setCartProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (id) => {
        setCartItems((prev) => ({
          ...prev,
          [id]: (prev[id] || 0) + 1, // Check if prev[id] exists, if not, default to 0
        }));
      };

    const removeFromCart =(id) => {
        setCartItems((prev) => ({...prev,
             [id]: prev[id] ||0 - 1,
             })) 
     }

     const removeItemFromCart = (productId) => {
      setCartItems((prevCartItems) => {
          const updatedCart = { ...prevCartItems };
          delete updatedCart[productId];
          return updatedCart;
      });
  };


     const contextValue = {cartItems, addToCart, removeFromCart, cartProducts,removeItemFromCart}

     console.log(cartItems)
  return (
    <ProductContext.Provider value={contextValue}>
       {props.children}
    </ProductContext.Provider>
  )
}


