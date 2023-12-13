import { BsFillPeopleFill } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaIceCream } from "react-icons/fa";
import carousal1 from "../assets/images/carousal-1.jpg";
import carousal2 from "../assets/images/carousal-2.webp";
import carousal3 from "../assets/images/carousal-3.jpg";
import carousal4 from "../assets/images/carousal-4.webp";

const Home = () => {
	return (
		<>
			{/* carousal section */}
			<div className="relative">
				<div className="absolute text-white bottom-20 drop-shadow-2xl left-32 z-10 flex flex-col">
					<span className=" text-4xl">Active Pharma</span>
					<span>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Tempora repellat aperiam.
					</span>
				</div>
				<div className="carousel w-full mt-4 h-[300px]  bg-red-600">
					<div id="item1" className="carousel-item w-full z-0">
						<img src={carousal1} className="w-full object-cover" />
					</div>
					<div id="item2" className="carousel-item w-full z-0">
						<img src={carousal2} className="w-full object-cover" />
					</div>
					<div id="item3" className="carousel-item w-full z-0">
						<img src={carousal3} className="w-full object-cover" />
					</div>
					<div id="item4" className="carousel-item w-full z-0">
						<img src={carousal4} className="w-full object-cover" />
					</div>
				</div>
				<div className="flex justify-center w-full py-2 gap-2">
					<a href="#item1" className="btn btn-xs">
						1
					</a>
					<a href="#item2" className="btn btn-xs">
						2
					</a>
					<a href="#item3" className="btn btn-xs">
						3
					</a>
					<a href="#item4" className="btn btn-xs">
						4
					</a>
				</div>
			</div>
			{/* what we do section */}
			<section className="m-10">
				<h2 className="text-3xl">What We Do</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
					velit rem deserunt porro voluptate quibusdam exercitationem!
					Adipisci harum odio quae ullam alias sunt. Sit, praesentium at
					delectus rem ducimus soluta. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Laboriosam eligendi, nulla commodi
					quaerat laborum hic incidunt, porro, tempora error omnis minima
					modi. Illo, magni. Doloremque aspernatur reprehenderit voluptates
					ut non quisquam quam impedit at accusantium. Consectetur
					obcaecati adipisci magnam nobis atque? Repudiandae laborum
					reiciendis ut distinctio aperiam, optio eos voluptas!
				</p>
				<div className="grid mt-5 gap-5 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
					<div className="bg-teal-600 h-60 relative rounded-sm  flex justify-center items-center">
						<div className="bg-white flex justify-center items-center h-20 w-20 absolute left-1 top-1 rounded-br-[40px]">
							<FaIceCream className="text-teal-600 text-5xl" />
						</div>
						<div className="flex justify-center items-center flex-col">
							<span className="font-bold text-2xl">Cosmetic APIs</span>
							<p className="text-center text-white">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>

					<div className="bg-teal-600 h-60 relative rounded-sm flex justify-center items-center">
						<div className="bg-white flex justify-center items-center h-20 w-20 absolute left-1 top-1 rounded-br-[40px]">
							<AiFillSetting className="text-teal-600 text-5xl" />
						</div>
						<div className="flex justify-center items-center flex-col">
							<span className="font-bold text-2xl">Cosmetic APIs</span>
							<p className="text-center text-white">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>
					<div className="bg-teal-600 h-60 relative  rounded-sm flex justify-center items-center">
						<div className="bg-white flex justify-center items-center h-20 w-20 absolute left-1 top-1 rounded-br-[40px]">
							<RiEditBoxFill className="text-teal-600 text-5xl" />
						</div>
						<div className="flex justify-center items-center flex-col">
							<span className="font-bold text-2xl">Cosmetic APIs</span>
							<p className="text-center text-white">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>
					<div className="bg-teal-600 h-60 relative rounded-sm flex justify-center items-center">
						<div className="bg-white flex justify-center items-center h-20 w-20 absolute left-1 top-1 rounded-br-[40px]">
							<BsFillPeopleFill className="text-teal-600 text-5xl" />
						</div>
						<div className="flex justify-center items-center flex-col">
							<span className="font-bold text-2xl">Cosmetic APIs</span>
							<p className="text-center text-white">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
