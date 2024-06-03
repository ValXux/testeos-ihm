import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Outlet></Outlet>
            </StrictMode>
        </>
    )
}

export default Basic;