import { AiFillPlayCircle } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
function App() {
	return (
		<div className="p-10 grid w-4/5 border-2 border-red-500 m-2 items-center justify-items-center  grid-cols-3 h-screen grid-rows-4 gap-5 lg:">
			<div className="size-20   group flex   bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] transition-all hidden group-hover:flex w-full h-full   items-center">
					<button
						onClick={() => {
							console.log("hello");
						}}
					>
						<AiFillPlayCircle className="text-5xl  " />
					</button>
				</div>
			</div>
			<div className="size-20  group flex  items-center bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] hidden group-hover:flex w-full h-full   items-center">
					<button>
						<AiFillPlayCircle className="text-5xl " />
					</button>
				</div>
			</div>
			<div className="size-20  group flex  items-center bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] hidden group-hover:flex w-full h-full   items-center">
					<button>
						<AiFillPlayCircle className="text-5xl " />
					</button>
				</div>
			</div>
			<div className="size-20  group flex  items-center bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] hidden group-hover:flex w-full h-full   items-center">
					<button>
						<AiFillPlayCircle className="text-5xl " />
					</button>
				</div>
			</div>
			<div className="size-20  group flex  items-center bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] hidden group-hover:flex w-full h-full   items-center">
					<button>
						<AiFillPlayCircle className="text-5xl " />
					</button>
				</div>
			</div>
			<div className="size-20  group flex  items-center bg-slate-300 border border-black rounded-md">
				<div className="bg-[rgba(0,0,0,.2)] hidden group-hover:flex w-full h-full   items-center">
					<button>
						<AiFillPlayCircle className="text-5xl " />
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
