// import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/layouts/headers/Header";
import NotFound from "../components/notFound/NotFound";
import FreeComponent from "../FreeComponent";
import AuthComponent from "../AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

const MainRoutes = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/free" element={<FreeComponent/>}/>
                <Route
                    path="/auth"
                    element={
                        <ProtectedRoutes>
                            <AuthComponent/>
                        </ProtectedRoutes>
                    }
                />
            </Routes>
        </>
    );
};

export default MainRoutes;
