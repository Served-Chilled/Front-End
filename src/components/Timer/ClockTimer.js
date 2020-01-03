import React from 'react';
import Timer from 'react-compound-timer';
import './ClockTimer.css';

export const ClockTimer = () => {
    return (
        <div>
            <div className='overlay'>
                <img className='img' src='https://i.imgur.com/SIWuQUv.jpg' />
                <Timer initialTime={900000} direction='backward'>
                    {() => (
                        <React.Fragment>
                            <div className='clock'>
                                <div className='minutes'>
                                    <Timer.Minutes className='minutes' /> :
                                    <Timer.Seconds />
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        </div>
    );
};
