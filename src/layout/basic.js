import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </StrictMode>
        </>
    )
}

export default Basic;