import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';

import Map from './pages/NotFoundPage';

const Path = () => {
    return (
        <div>
            <Switch>
                <Routes>
                    <Route exact path="/" component={Map} />
                </Routes>
            </Switch>
        </div>
    );
};

export default Path;
