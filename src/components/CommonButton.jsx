import React from "react";

const CommonButton = ({ textColor, bgColor, onClick, children }) => {
	return (
		<div>
			<button
				style={{ backgroundColor: bgColor, color: textColor }}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default CommonButton;
