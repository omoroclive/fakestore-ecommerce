import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const texts = [
    'Free delivery on orders above $50',
    'We have amazing discounts',
    'Shop now for great deals',
    'Stay tuned for new arrivals'
    
];

function Announce() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    const [announceStyle, setAnnounceStyle] = useState('bg-orange-500 text-white w-full md:w-auto h-18 flex items-center justify-between lg:text-xl capitalize p-4 sticky top-0');

    const handleClose = () => {
        setAnnounceStyle(announceStyle + ' hidden');
    };

    useEffect(() => {
        const currentText = texts[index % texts.length];
        const currentTextLength = currentText.length;

        if (text.length < currentTextLength) {
            setTimeout(() => {
                setText(currentText.substring(0, text.length + 1));
            }, 100);
        } else {
            setTimeout(() => {
                setText('');
                setIndex(index + 1);
            }, 1000); // Display each text for 1 second
        }
    }, [index, text]);

    return (
        <div className={announceStyle}>
            <div className='flex-1'>{text}</div>
            <div className='block rounded items-center px-4'>
                <WhatsAppIcon className='bg-green-500 text-white rounded-full p-1 mr-2' />
                <span>Call to order on +254791150726</span>
            </div>
            <CloseIcon className='cursor-pointer text-red-800 bg-neutral-50 p-2 rounded font-bold' onClick={handleClose} />
        </div>
    );
}

export default Announce;


