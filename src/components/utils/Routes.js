import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import { Scan } from '../Scan/Scan';
import { Home } from '../Home/Home';
import { Barcode } from '../Barcode/Barcode';
import { Instructions } from '../Instructions/Instructions';
import { ClockTimer } from '../Timer/ClockTimer';

const Routes = props => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/scan' component={Scan} />
            <Route path='/barcode' component={Barcode} />
            <Route path='/instructions' component={Instructions} />
            <Route path='/timer' component={ClockTimer} />
        </>
    );
};

export default Routes;
