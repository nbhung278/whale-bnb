import React, { useTransition } from "react";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const HeaderMenu = () => {
	const { t } = useTranslation()
	return (
		<div className="flex gap-2 border border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-200 hover:shadow-gray-300 hover:cursor-pointer">
			<div className="flex items-center">
				<span className="font-semibold md:text-[15px] text-[12px] text-gray-800">
					{t("Anywhere")}
				</span>
			</div>
			<div className="border-l border-gray-300 mx-2"></div>
			<div className="flex items-center">
				<span className="font-semibold md:text-[15px] text-[12px] text-gray-800">
					{t("Any week")}
				</span>
			</div>
			<div className="border-l border-gray-300 mx-2"></div>
			<div className="flex items-center">
				<span className="md:text-[15px] text-[12px] text-gray-800">
					{t("Add guests")}
				</span>
			</div>
			<div className="border-l border-gray-300 mx-2"></div>
			<div>
				<button className="bg-secondary text-white p-2 rounded-full">
					<IoSearch size="16px" />
				</button>
			</div>
		</div>
	);
};

export default HeaderMenu;
