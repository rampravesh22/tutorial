import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
	<div className="item h-40 bg-red-500" data-value="1">
		1
	</div>,
	<div className="item h-40 bg-blue-600" data-value="2">
		2
	</div>,
	<div className="item h-40 bg-orange-500" data-value="3">
		3
	</div>,
	<div className="item h-40 bg-slate-500" data-value="4">
		4
	</div>,
	<div className="item h-40 bg-teal-500" data-value="5">
		5
	</div>,
	<div className="item h-40 bg-teal-500" data-value="5">
		5
	</div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
	return items.map((item, i) => (
		<div
			className="thumb"
			onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
		>
			{item}
		</div>
	));
};

const Home = () => {
	const [mainIndex, setMainIndex] = useState(0);
	const [mainAnimation, setMainAnimation] = useState(false);
	const [thumbIndex, setThumbIndex] = useState(0);
	const [thumbAnimation, setThumbAnimation] = useState(false);
	const [thumbs] = useState(
		thumbItems(items, [setThumbIndex, setThumbAnimation])
	);

	const slideNext = () => {
		if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
			setThumbAnimation(true);
			setThumbIndex(thumbIndex + 1);
		}
	};

	const slidePrev = () => {
		if (!thumbAnimation && thumbIndex > 0) {
			setThumbAnimation(true);
			setThumbIndex(thumbIndex - 1);
		}
	};

	const syncMainBeforeChange = (e) => {
		setMainAnimation(true);
	};

	const syncMainAfterChange = (e) => {
		setMainAnimation(false);

		if (e.type === "action") {
			setThumbIndex(e.item);
			setThumbAnimation(false);
		} else {
			setMainIndex(thumbIndex);
		}
	};

	const syncThumbs = (e) => {
		setThumbIndex(e.item);
		setThumbAnimation(false);

		if (!mainAnimation) {
			setMainIndex(e.item);
		}
	};

	return [
		<div className="thumbs relative">
			<AliceCarousel
				activeIndex={thumbIndex}
				autoWidth
				disableButtonsControls
				disableDotsControls
				items={items}
				infinite
				autoPlay
				mouseTracking={false}
				onSlideChanged={syncThumbs}
				touchTracking={!mainAnimation}
			/>
			<div
				className="btn-next cursor-pointer  border px-6 py-1 rounded  text-2xl absolute  left-5 top-[50%] -translate-y-[50%] hover:bg-red-500"
				onClick={slidePrev}
			>
				Prev
			</div>
			<div
				className="btn-next cursor-pointer hover:bg-red-500  border px-6 py-1 rounded  text-2xl absolute  right-5 top-[50%] -translate-y-[50%]"
				onClick={slideNext}
			>
				Next
			</div>
		</div>,
	];
};

export default Home;
