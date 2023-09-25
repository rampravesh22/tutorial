import React from "react";

const Posts = ({ posts }) => {
	return (
		<>
			{posts.map((post) => {
				return (
					<div
						key={post.id}
						className="shadow-sm  flex justify-center items-center shadow-black h-[100px] w-[200px]"
					>
						{post.user.username}
					</div>
				);
			})}
		</>
	);
};

export default Posts;
