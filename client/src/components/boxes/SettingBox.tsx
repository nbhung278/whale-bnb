import React from "react";
import { ImProfile } from "react-icons/im";

interface SettingBoxProps {
	icon?: any;
	title: string;
	content: string;
}

const SettingBox: React.FC<SettingBoxProps> = (props) => {
	const { icon, title, content } = props;
	return (
		<div className="shadow-lg p-4 rounded-xl border-gray-100  border-[1px] cursor-pointer">
			<div>{icon}</div>
			<div className="mt-5 line-clamp-1">
				<span className="text-gray-900 font-semibold">{title}</span>
			</div>
			<div className="mt-2 max-w-[90%] line-clamp-2 h-[50px]">
				<span className="text-gray-500">{content}</span>
			</div>
		</div>
	);
};

export default SettingBox;
