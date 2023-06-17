import React from "react";
import { Navigate, Route, redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoutes = ({ children }: any) => {
	const token = cookies.get("TOKEN");
	return token ? <>{children}</> : <Navigate to="/" replace={true} />;
};

export default ProtectedRoutes;
