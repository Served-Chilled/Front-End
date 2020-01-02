import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Component Imports
import ScrollToTop from './components/utils/withScrollToTop';
import App from './App';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);
