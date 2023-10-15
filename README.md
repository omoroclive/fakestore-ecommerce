# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



{/* searchBox*/}
                <div className='searchBox flex justify-between border-solid border-[2px] p-2 ml-3 items-center w-full rounded-md'>
                    <input className='input outline-none'
                        type='name'
                        placeholder='Search Products...'
                        onChange={handleOnchange} />
                    <SearchIcon />

                </div>

const [searchTerm, setSearchTerm] = useState('')

    {/*handling search input*/}
    const handleOnchange = (e) => {
        setSearchTerm (e.target.value)
    }

    {searchProducts.filter ((searchProduct) =>{
        if(searchTerm== '') {
            return product
        }
    })


    const getDefaultCart =() =>{
    let cart ={};
    for (let i = 1; i < Product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

 <div>
        {Product.map((element)=> {
         if (cartItems[element.id] !==0) {
            return <CartItemBox data={element}/>
         }
        })}
      </div>

      <div className='flex flex-col p-2 justify-end items-center w-full'>
            <button className='bg-orange-500 rounded w-full text-white shadow-sm px-2 mb-1 py-2 mx-auto'onClick={() => addToCart(id)}>add to cart</button>
            </div>



    import React, {useState} from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slider1 from '../assets/shopping bag 1.png'
import slider2 from '../assets/shirts.png'
import slider3 from '../assets/chamdor.png'
import slider4 from '../assets/wine.png'
import slider5 from '../assets/samsung s23.png'
import slider6 from '../assets/lg screen.png'
import slider7 from '../assets/shopping basket.png'



function Slider() {
    const sliderImages = [ 
        {
           url: slider1,

        },
        {
           url: slider2,
        },
        {
           url: slider3,
        },
        {
           url: slider4,
        },
        {
            url: slider5
         },
         {
            url: slider6
         },
         {
            url: slider7
         },
        
     ];
     const [activeImageNum, setCurrent] = useState(0);
     const length = sliderImages.length;
     const nextSlide = () => {
        setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
     };
     const prevSlide = () => {
        setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
     };
     if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
        return null;
     }
     return (
        <div className='w-[100%] h-[100vh] shadow-md rounded-lg relative bg-blue-400'>
           <section className = "image-slider h-[400px] w-[600px] flex justify-center  m-[auto] min-h-screen items-center   py-4 object-contain rounded-md lg: w-[800px]">
              <div class = "left">
                 <ArrowBackIosIcon onClick = {prevSlide} />
              </div>
              <div class="right"> 
                 <ArrowForwardIosIcon onClick = {nextSlide} />
              </div>
              {sliderImages.map((currentSlide, ind) => {
                 return (
                    <div
                       className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                       key={ind}
                    >
                       {ind === activeImageNum && <img src={currentSlide.url} className="image w-[450px] h-[450px] rounded p-3" />}
                    </div>
                 );
              })}
           </section>
        </div>
     );
  return (
    <div>
      
    </div>
  )
}

export default Slider

.left {
  position: absolute;
  left: 3rem;
  top: 50%;
  font-size: 1rem;
  color: blue;
  z-index: 5;
  cursor: pointer;
  user-select: none;
}
.right {
  position: absolute;
  right: 3rem;
  top: 50%;
  font-size: 2rem;
  color: blue;
  z-index: 5;
  cursor: pointer;
  user-select: none;
}
.currentSlide {
  transition-duration: 0.5s ease;
  opacity: 0;
}
.currentSlide.active {
  opacity: 1;
  transition-duration: 0.5s;
  transform: scale(1.2);
}
h2{
  display: block;
  align-items: center;
}


import React from 'react'
import image1 from '../assets/fila.png'
import image2 from '../assets/shirts.png'
import image3 from '../assets/fila.png'
import image4 from '../assets/samsung note 10.png'
import image5 from '../assets/gucci sweatshirts.png'
import image6 from '../assets/lg screen.png'
import image7 from '../assets/macbook air.png'
import image8 from '../assets/wine.png'


function Category() {
    const imageStyle = 'h-[200px] w-[200px] rounded bg-slate-200 flex  items-center justify-between p-2 overflow-hidden gap-2'
    const headingStyle ='font-black font-bold block text-justify text-center items-center border-b-[1px] hover:border-orange-500'
    return (
        <div className='w-[100%] flex flex-1 overflow-hidden m-4 p-4 justify-between mt-2 mb-2 bg-white rounded shadow-md gap-2 items-center text-center'>

            <div className='block text-center'>
                <img src={image1} alt='' className={imageStyle}/>
                <h2 className={headingStyle} >men's fashion</h2>
            </div>

            <div>
            <img src={image2} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>electronics</h2>
            </div>
            <div>
            <img src={image3} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>women's <span>fashion</span></h2>
            </div>

            <div>
            <img src={image4} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>phones</h2>
            </div>
            <div>
            <img src={image5} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>tvs</h2>
            </div>
            <div>
            <img src={image6} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>laptops</h2>
            </div>
            <div>
            <img src={image7} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>laptops</h2>
            </div>
            <div>
            <img src={image8} alt='' className={imageStyle}/>
                <h2 className={headingStyle}>drinks</h2>
            </div>


        </div>
    )
}

export default Category

import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';




const SearchBox = () => {

    
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([])

   

    {/*handling search input*/ }
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    {/* handling submission*/ }
    const handleSubmit = (e) => {
        e.preventDefault()

    }


    {/*handling fetch */ }
    useEffect(() => {
        const API_url_search = 'https://fakestoreapi.com/products'

        const fetchSearchResults = async () => {
            try {
                const response = await fetch(API_url_search)
                const data = await response.json()
                setSearchData(data)
            } catch (error) {
                console.error('error fetching search result')
            }
        }

        if (searchTerm !== '') {
            fetchSearchResults()
        } else {
            setSearchData([])
        }
    }, [searchTerm])


    return (

        <div className='flex justify-between'>
            <form onSubmit={handleSubmit}>
                <input className='input outline-none'
                    type='name'
                    placeholder='Search Products...'
                    onChange={handleInputChange}
                    value={searchTerm} />
                <SearchIcon />
                
            </form>


            <ul>
                {searchData.map((product, index) => {
                    <li key={index}>
                        <p>{product.title}</p>
                    </li>
                })}
            </ul>


        </div>
    )
}

export default SearchBox


import React from 'react'
import logo from '../assets/logo.jpg'
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';

function Footer() {

    const handleTwitterClick = () => {
        window.open('https://twitter.com/omoro_clive')
    }

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/omoro.clive.5')
    }

    const handleYoutubeClick = () => {
        window.open('https://youtube.com/@cliveomoro1244')
    }

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/omoroclive')
    }
    const headingStyle = 'font-bold m-2 text-xl'
    return (

        <div className='w-full mx-auto h-50 bg-black border-white border-b-[2px] grid grid-cols-4 gap-4 text-white capitalize m-4 outline-none'>
            <div className='block items-center m-4'>
                <div className='flex'>
                    <h1 className={headingStyle}>Oasis</h1>

                    <img src={logo} alt='logo' className='w-8 h-8' />
                </div>
                <div className='text-justify text-center text-white p-2'>
                    <p>know more about Oasis Shop which offers amazing products</p>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                    <FacebookIcon className='bg-blue-500 rounded w-16 h-16' onClick={handleFacebookClick} />
                    <Instagram className='bg-indigo-500 rounded w-16 h-16' onClick={handleInstagramClick} />
                    <Twitter className='bg-blue-500 rounded w-16 h-16' onClick={handleTwitterClick} />
                    <YouTube className='bg-red-500 rounded w-16 h-16' onClick={handleYoutubeClick} />
                </div>


            </div>
            <div>
                <h1 className={headingStyle}>shop</h1>
                <div className='p-2'>
                    <p>accessories</p>
                    <p>clothes</p>
                    <p>electronics</p>
                    <p>home appliances</p>
                    <p>new arrivals</p>
                </div>

            </div>
            <div>
                <h1 className={headingStyle}>your account</h1>
                <div className='p-2'>
                    <p>profile</p>
                    <p>orders</p>
                    <p>addresses</p>
                    <p>account details</p>
                    <p>payment options</p>
                </div>
            </div>
            <div className='mr-4'>
                <h1 className={headingStyle}>subscribe to our newsletter</h1>
                <div className='border-[2px] border-solid flex justify-between pr-2 mr-4 items-center w-full rounded-md hover:border-slate-400 hover:outline-none'>
                    <input className='outline-none p-2'
                        type='name'
                        placeholder='Enter Email'
                    />
                    <SendIcon className='bg-blue-500 p-2' />
                </div>
            </div>
        </div>
    )
}

export default Footer

  import React from 'react';
import logo from '../assets/logo.jpg';
import SearchBox from './SearchBox';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar w-full shadow-xl sticky bg-white py-3 z-50 top-0'>
            <div className='container flex items-center justify-between mx-auto'>

                {/* Logo */}
                <div className='logo flex items-center gap-2'>
                    <img src={logo} alt='logo' className='w-10 h-10' />
                    <h1 className='font-bold text-black text-xl'>Oasis</h1>
                </div>

                {/* SearchBox */}
                <div className='searchBox flex-1 ml-6'>
                    <SearchBox />
                </div>

                {/* User */}
                <div className='user flex items-center gap-4'>
                    <Link to="/profile" className='text-gray-700 hover:text-black'>
                        <PermIdentityIcon style={{ fontSize: '28px' }} />
                    </Link>
                    <Link to="/cart" className='text-gray-700 hover:text-black'>
                        <ShoppingCartIcon style={{ fontSize: '28px' }} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Navbar;  


className='max-w-screen-xl  py-10 mx-auto grid grid-cols-4 gap-4
    flex' 