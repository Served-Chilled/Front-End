import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
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
            <img className='img' src='https://i.imgur.com/5ns9mnK.jpg' />
            <Link className='instructions' to='/instructions'>
                Next
            </Link>
        </div>
    );
};
