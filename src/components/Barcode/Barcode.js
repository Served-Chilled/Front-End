import React, { useState } from 'react';
import axios from 'axios';
import './Barcode.css';

export const Barcode = () => {
    const [barcode, setBarcode] = useState('');
    const [result, setResult] = useState();

    const handleChanges = e => {
        e.preventDefault();
        setBarcode(e.target.value);
    };

    const getAPIdata = barcode => {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy to avoid CORS error

        const api_key = '700ixlh8o6y9w6zqdmn0ta4zuy1nop';

        const url = `${proxyurl}https://api.barcodelookup.com/v2/products?barcode=${barcode}&formatted=y&key=${api_key}`;

        axios
            .get(url)
            .then(res => setResult(res.data))
            .catch(err => console.log(err));
    };
    console.log(barcode, 'BARCODE');
    result && console.log(result, 'RESULT');
    return (
        <div>
            <img
                src={'https://i.imgur.com/UsB0vjw.jpg'}
                alt='Coca Cola Barcode'
                onClick={() => setBarcode('049000028904')}
                className='image coke'
            />
            <img
                src={'https://i.imgur.com/GHNyYr3.png'}
                alt='Pepsi Barcode'
                onClick={() => setBarcode('012000000133')}
                className='image pepsi'
            />
            <img
                src={'https://i.imgur.com/IfQ3gBw.jpg'}
                alt='Bud Light Barcode'
                onClick={() => setBarcode('018200530470')}
                className='image budlight'
            />
            <h1>Enter Barcode Here</h1>
            <input
                type='number'
                placeholder='Barcode ...'
                name='barcode'
                onChange={handleChanges}
                value={barcode}
                className='barcode'
            />
            <button onClick={() => getAPIdata(barcode)}>Submit</button>

            <h1>Product Name: {result && result.products[0].product_name}</h1>
            <h1>Barcode: {result && result.products[0].barcode_number}</h1>
        </div>
    );
};
