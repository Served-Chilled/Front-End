import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import { Scan } from '../Scan/Scan';
import { Home } from '../Home/Home';

const Routes = props => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/scan' component={Scan} />
        </>
    );
};

export default Routes;
