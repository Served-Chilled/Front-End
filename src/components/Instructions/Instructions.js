import React from 'react';
import './Instructions.css';
import { Link } from 'react-router-dom';

export const Instructions = () => {
    return (
        <div className='homePage'>
            <div class='middle'>
                <div>
                    <div className='hg'></div>
                    <div className='hg'></div>
                    <div className='hg'></div>
                </div>
                <div>
                    <h2> Serve Chilled </h2>
                </div>
                <div>
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className='overlay'>
                <img className='img' src='https://i.imgur.com/SIWuQUv.jpg' />
                <h1>
                    Have you ever left a beverage in the freezer for too long
                    only to return and find it frozen solid? With the Serve
                    Chilled app we utilize a timer that alerts you when the
                    optimal temperature for chilled, medium and thick
                    consistency is reached.{' '}
                </h1>
                <Link className='button' to='/barcode'>
                    Chill
                </Link>
            </div>
        </div>
    );
};
