import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import React from "react";

const Rating = ({ value, text }) => {
	return (
		<div className="flex items-center">
			<span className="text-orange-500">
				{value >= 1 ? (
					<BsStarFill />
				) : value >= 0.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span className="text-orange-500">
				{value >= 2 ? (
					<BsStarFill />
				) : value >= 1.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span className="text-orange-500">
				{value >= 3 ? (
					<BsStarFill />
				) : value >= 2.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span className="text-orange-500">
				{value >= 4 ? (
					<BsStarFill />
				) : value >= 3.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span className="text-orange-500">
				{value >= 5 ? (
					<BsStarFill />
				) : value >= 4.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span className="ml-3">{text && text}</span>
		</div>
	);
};

export default Rating;
