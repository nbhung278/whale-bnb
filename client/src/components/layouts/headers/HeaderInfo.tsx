import React, { useState } from "react";
import { Avatar, Divider } from "@mui/material";
import { HiOutlineMap, HiMenu, HiUserCircle } from "react-icons/hi";
import pumpkin from "../../../assets/images/pumpkin.jpg";
import DrawerBase from "../../drawers/Drawer";
import { useTranslation } from "react-i18next";
import LoginForm from "../../auths/login/Login";
import SignupForm from "../../auths/signup/Signup";
import Cookies from "universal-cookie";

const HeaderInfo = () => {
	const cookies = new Cookies();
	const [open, setOpen] = useState<boolean>(false);
	const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);
	const [openSignupDialog, setOpenSignupDialog] = useState<boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const { t } = useTranslation();
	console.log('cookies',cookies);
	const token = cookies.get("TOKEN");

	const logout = () => {
		// destroy the cookie
		setOpen(false);
		cookies.remove("TOKEN", { path: "/" });
		window.location.href = "/";
	};
	const handleOpenLoginDialog = () => {
		setOpen(false);
		setOpenLoginDialog(true);
	};

	const handleOpenSignupDialog = () => {
		setOpen(false);
		setOpenSignupDialog(true);
	};
	const list = () =>
		isLogin == true || token ? (
			<div className="min-w-[270px] py-6">
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="font-semibold text-gray-700">{t("Messages")}</span>
				</div>
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="font-semibold text-gray-700">{t("Trips")}</span>
				</div>
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="font-semibold text-gray-700">{t("Wishlists")}</span>
				</div>
				<Divider />
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="text-gray-700">{t("Whalebnb your home")}</span>
				</div>
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="text-gray-700">{t("Account")}</span>
				</div>
				<Divider />
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="text-gray-700">{t("Help")}</span>
				</div>
				<div
					className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer"
					onClick={() => logout()}
				>
					<span className="text-gray-700">{t("Logout")}</span>
				</div>
			</div>
		) : (
			<div className="min-w-[270px] py-6">
				<div
					className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer"
					onClick={handleOpenLoginDialog}
				>
					<span className="font-semibold text-gray-700">{t("Log in")}</span>
				</div>
				<div
					className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer"
					onClick={handleOpenSignupDialog}
				>
					<span className=" text-gray-700">{t("Sign up")}</span>
				</div>
				<Divider />
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="text-gray-700">{t("Whalebnb your home")}</span>
				</div>
				<div className="hover:bg-gray-100 px-5 py-3 hover:cursor-pointer">
					<span className="text-gray-700">{t("Help")}</span>
				</div>
			</div>
		);
	return (
		<>
			<div className="hidden lg:flex items-center gap-10">
				<div className="border border-none rounded-full py-2 px-5 hover:border-gray-100 hover:bg-gray-100 hover:cursor-pointer">
					<span className="text-gray-800">{t("Whalebnb your home")}</span>
				</div>
				<div className="border border-none rounded-full py-2 px-5 hover:border-gray-100 hover:bg-gray-100 hover:cursor-pointer">
					<HiOutlineMap size="20px" />
				</div>
				<div className="border rounded-full border-gray-300 p-1 shadow-md shadow-gray-200 hover:shadow-gray-300 hover:cursor-pointer">
					<div
						onClick={() => setOpen(true)}
						className="flex gap-2 items-center px-2 max-h-[50px]"
					>
						<HiMenu size="25px" />
						{/* <HiUserCircle size="40px" /> */}
						<Avatar alt="Remy Sharp" src={pumpkin} />
					</div>
				</div>
				<DrawerBase
					anchor="right"
					open={open}
					content={list()}
					setOpen={setOpen}
				/>
			</div>
			<LoginForm
				setOpenDialog={setOpenLoginDialog}
				openDialog={openLoginDialog}
				isLogin={isLogin}
				setIsLogin={setIsLogin}
			/>
			<SignupForm
				setOpenDialog={setOpenSignupDialog}
				openDialog={openSignupDialog}
				setOpenLoginDialog={setOpenLoginDialog}
			/>
		</>
	);
};

export default HeaderInfo;
