import { Checkbox } from "@mui/material";
import React from "react";

interface BaseCheckboxProps {
	size?: number;
	color?: string;
	checkedColor?: string;
	name: string;
	onChange?: any;
	checked?: boolean;
}
const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
	size = 24,
	color = 'rgb(0, 0, 0)',
	checkedColor,
	name,
	onChange,
	checked,
}) => {
	return (
		<Checkbox
			checked={checked}
			onChange={onChange}
			size="medium"
			name={name}
			sx={{
				color: color,
				"&.Mui-checked": {
					color: checkedColor || color,
				},
				"& .MuiSvgIcon-root": { fontSize: size },
			}}
		/>
	);
};

export default BaseCheckbox;
