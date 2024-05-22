import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </StrictMode>
        </>
    )
}

export default Basic;