import React from "react";
import icons from "../../assets/socialIcons";

const IconComponent = ({ iconName }) => {
	const IconWrapper = icons[iconName];
	return <IconWrapper className="text-lg" />;
};

export default IconComponent;
