import React, { useState, useEffect } from 'react';
import slider2 from '../assets/shirts.png';
import slider3 from '../assets/chamdor.png';
import slider4 from '../assets/wine.png';
import slider5 from '../assets/samsung s23.png';


function Slider() {
    const sliderImages = [
         slider2, slider3, slider4, slider5
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex +1) % sliderImages.length);
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex, sliderImages.length]);

    return (
        <div className='relative overflow-hidden w-full h-[70vh] bg-blue-400'>
            <section className='image-slider w-full h-[70vh] flex'>
                {sliderImages.map((imageUrl, index) => (
                    <div
                        key={index}
                        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            

                            
                        }}
                    ></div>
                ))}
            </section>
        </div>
    );
}

export default Slider;