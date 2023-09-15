import React from "react";

const Message = ({ position, text, type }) => {
	return (
		<div className={`toast ${position}`}>
			<div className={`alert ${type}`}>
				<span>{text || "message"} </span>
			</div>
		</div>
	);
};

export default Message;
