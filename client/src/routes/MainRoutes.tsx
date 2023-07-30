// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/layouts/headers/Header";
import NotFound from "../components/notFound/NotFound";
import FreeComponent from "../FreeComponent";
import AuthComponent from "../AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import AccountSetings from "../pages/accountSetting";
import UserInfo from "../pages/accountSetting/UserInfo";
import UserInfoEdit from "../pages/accountSetting/UserInfoEdit";

const MainRoutes = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/free" element={<FreeComponent />} />
				<Route
					path="account-settings"
					element={
						<ProtectedRoutes>
							<AccountSetings />
						</ProtectedRoutes>
					}
				/>
				<Route
					path="users/:id"
					element={
						<ProtectedRoutes>
							<UserInfo />
						</ProtectedRoutes>
					}
				/>
				<Route
					path="users/:id/edit"
					element={
						<ProtectedRoutes>
							<UserInfoEdit />
						</ProtectedRoutes>
					}
				/>
				<Route
					path="/auth"
					element={
						<ProtectedRoutes>
							<AuthComponent />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</>
	);
};

export default MainRoutes;
