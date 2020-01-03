import React from 'react';
import './BeverageSelector.css';

export const BeverageSelector = ({ setBarcode }) => {
    return (
        <div className='grid'>
            <img
                src={'https://i.imgur.com/CMHG3ph.jpg?1'}
                alt='Coca Cola Barcode'
                onClick={() => setBarcode('049000028904')}
                className='image coke'
            />
            <img
                src={'https://i.imgur.com/RS6bSlC.jpg?1'}
                alt='Pepsi Barcode'
                onClick={() => setBarcode('012000000133')}
                className='image pepsi'
            />
            <img
                src={'https://i.imgur.com/sNmQfMI.png'}
                alt='Bud Light Barcode'
                onClick={() => setBarcode('018200530470')}
                className='image budlight'
            />
            <img
                src={'https://i.imgur.com/XEdseih.png'}
                alt='Budweiser Barcode'
                onClick={() => setBarcode('018200007712')}
                className='image budlight'
            />
            <img
                src={'https://i.imgur.com/zoQlnQG.jpg?1'}
                alt='Fanta Barcode'
                onClick={() => setBarcode('492711000323')}
                className='image budlight'
            />
            <img
                src={'https://i.imgur.com/9BApCwE.jpg?1'}
                alt='Corona Barcode'
                onClick={() => setBarcode('080660956800')}
                className='image budlight'
            />
            <img
                src={'https://i.imgur.com/MDWUex5.jpg?1'}
                alt='Sprite Barcode'
                onClick={() => setBarcode('049000037111')}
                className='image budlight'
            />
            <img
                src={'https://i.imgur.com/wx36kYV.jpg?1'}
                alt='Mountain Dew Barcode'
                onClick={() => setBarcode('012000809965')}
                className='image budlight'
            />
        </div>
    );
};
