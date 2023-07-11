import { Slider } from "@mui/material";
import React from "react";

interface RangeSliderProps {
	value?: any;
	min?: number;
	max?: number;
	onChange?: any;
	valueLabelDisplay?: any;
	getAriaValueText?: any;
	railColor?: string;
	trackColor?: string;
	thumbColor?: string;
	activeColor?: string;
	getAriaLabel?: any;
}
const RangeSlider: React.FC<RangeSliderProps> = ({
	value = [1, 10],
	min = 1,
	max = 100,
	onChange,
	getAriaLabel,
	valueLabelDisplay = "auto",
	getAriaValueText = value,
	railColor = "#9d9d9d",
	thumbColor = "#000000",
	trackColor = "#000000",
	activeColor = "#000000",
}) => {
	return (
		<Slider
			getAriaLabel={getAriaLabel}
			value={value}
			min={min}
			max={max}
			onChange={onChange}
			valueLabelDisplay={valueLabelDisplay}
			getAriaValueText={getAriaValueText}
			sx={{
				"& .MuiSlider-thumb": {
					color: thumbColor,
				},
				"& .MuiSlider-track": {
					color: trackColor,
				},
				"& .MuiSlider-rail": {
					color: railColor,
				},
				"& .MuiSlider-active": {
					color: activeColor,
				},
			}}
		/>
	);
};

export default RangeSlider;
