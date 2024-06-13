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

/* Log in - Log out */
import Basic from './layout/basic';
import Main from './main';
import Aside from './aside';

/* Home page */
import BasicHome from './layout/home/Basic-home';
import Asidebar from './layout/home/asidebar';
import Info from './layout/home/info';

import HomeMain from './home-main';


const router = createBrowserRouter ([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="container">
                        <div className='row py-5'>
                            <div className="col-md-8">
                                <Main></Main>
                            </div>
                            <div className="col-md-4">
                                <Aside></Aside>
                            </div>
                        </div>
                    </div>
                </>
            }
        ]
    },
    {
        path: "home",
        element: <BasicHome />,
        children: [
            {
                path: "",
                element: <>
                    <HomeMain></HomeMain>
                </>
            }
        ]
    }
]);

const root = createRoot(document.getElementById("root"));
    root.render(
    <RouterProvider router={router} />
);