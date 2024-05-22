import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import './style.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const feather = require('feather-icons');
setTimeout ( () => {
    feather.replace();
}, 10);

import Basic from './layout/basic';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4">

                    </div>
                </>
            },
        ]
    }
]);

const root = createRoot(document.getElementById("root"));
    root.render(
    <RouterProvider router={router} />
);