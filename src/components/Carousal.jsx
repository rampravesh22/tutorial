import React from "react";
import CinemaImg from "../images/cinema.jpeg";
import DnaImg from "../images/dna.jpeg";
import LaptopImg from "../images/laptop.jpeg";
import PhoneImg from "../images/phone.jpeg";
const Carousal = () => {
	return (
		<div className="carousel w-full">
			<div
				id="slide1"
				className="carousel-item relative w-full overflow-hidden"
			>
				<img src={CinemaImg} className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src={DnaImg} className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src={LaptopImg} className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img src={PhoneImg} className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Carousal;
