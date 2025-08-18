import Image from "next/image";

import SplashImage from "@/public/images/hero/bigSplash.jpg";
import reelPhoto1 from "@/public/images/hero/reelPhoto1.jpg";
import reelPhoto2 from "@/public/images/hero/reelPhoto2.jpg";
import reelPhoto3 from "@/public/images/hero/reelPhoto3.jpg";
import logo from "@/public/images/hero/logo.png";
import { font_seconday } from "@/app/lib/fonts";

export default function Hero() {
	return (
		<div>

			<div className="w-full h-16 lg:h-[16vh] pt-1 pb-3 flex justify-center content-center bg-black/60">
				<div className="relative flex z-10">
					<Image
						src={logo}
						alt="logo"
						priority
						className='w-40 h-24 lg:w-[24vw] lg:h-[24vh]'
					/>
					<h2 className={`text-xl -ml-10 mt-5 text-white tracking-wider lg:text-[6vh] lg:-ml-[6vw] lg:mt-[4vh]`}>Photography & Graphic Arts</h2>
				</div>
			</div>

			<div className='bg-black py-1 flex flex-col lg:py-[0.5vh] lg:gap-[0.5vh] lg:flex-row'>
			<div className="relative w-full h-54 overflow-hidden lg:h-[40vh] lg:w-0 lg:flex-2">

						<Image
								src={SplashImage}
								alt="spalshImage"
								priority
								placeholder="blur"
								className="-mt-8 object-cover w-full lg:-mt-[24vh]"
							/>
			</div>

			<div className="w-full h-18 flex gap-1 lg:gap-[0.5vh] pt-1 lg:pt-0 lg:h-[40vh] lg:w-0 lg:flex-1 lg:flex-col">
					<Image
						src={reelPhoto1}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-full object-cover lg:h-0 lg:flex-1"
					/>
					<Image
						src={reelPhoto2}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-full object-cover lg:h-0 lg:flex-1"
					/>
					<Image
						src={reelPhoto3}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-full object-cover lg:hidden"
					/>

			</div>
			</div>
		</div>
			)
			}