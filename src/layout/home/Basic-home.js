import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";

import Asidebar from "./asidebar";

const BasicHome = () => {
    return (
        <>
            <StrictMode>
                <Header></Header>
                <div class="container-fluid">
                    <div class="row">
                        <Asidebar></Asidebar>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>
            </StrictMode>
        </>
    )
}

export default BasicHome;