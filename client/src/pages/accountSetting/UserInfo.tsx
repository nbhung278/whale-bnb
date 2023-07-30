import React from "react";
import { Link, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const UserInfo = () => {
	const cookies = new Cookies();
	const userInfo = cookies.get("TOKEN");
	return (
		<div className="h-[100vh]">
			<div className="pt-[90px] px-[15%]">
				<div>
					<Link to={`/users/${userInfo.id}/edit`}>Chỉnh sửa hồ sơ</Link>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
