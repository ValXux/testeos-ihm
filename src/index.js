import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import './style.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

setTimeout ( () => {
    feather.replace();
}, 10);

const feather = require('feather-icons');

/* Log in - Log out */
import Basic from './layout/basic';
import Main from './main';
import Aside from './aside';

/* Home page */
import BasicHome from './layout/home/Basic-home';
import Info from './layout/home/info';

/* Main Bar */
import HomeMain from './home-main';
import Profile from './layout/mainBar/profile';
import Progress from './layout/mainBar/progress';
import Excercise from './layout/mainBar/excercise';
import Challenge from './layout/mainBar/challenge';
import Help from './layout/mainBar/help';

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
                    <HomeMain />
                    <Info></Info>
                </>
            },
            {
                path: "excercise/:id",
                element: <Excercise />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "progress",
                element: <Progress />
            },
            {
                path: "challenge",
                element: <Challenge />
            },
            {
                path: "help",
                element: <Help />
            }
        ]
    }
]);

const root = createRoot(document.getElementById("root"));
    root.render(
    <RouterProvider router={router} />
);