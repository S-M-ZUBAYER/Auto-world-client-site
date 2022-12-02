import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../HomePage/Home/Home';
import Root from '../../Layout/Root/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;