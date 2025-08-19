import Image from "next/image";

import SplashImage from "@/public/images/hero/bigSplash.jpg";
import reelPhoto1 from "@/public/images/hero/reelPhoto1.jpg";
import reelPhoto2 from "@/public/images/hero/reelPhoto2.jpg";
import reelPhoto3 from "@/public/images/hero/reelPhoto3.jpg";
import logo from "@/public/images/hero/logo.png";
import { font_seconday } from "@/app/lib/fonts";

export default function Hero() {
	return (
		<>

			<div className="w-full h-16 lg:h-[16vh] pt-1 bg-black/60 flex justify-center">
				<div className="relative z-10 h-[160%] aspect-5/3 -ml-[42%]">
					<Image
						src={logo}
						alt="logo"
						priority
						fill
					/>
					<h2 className={`absolute top-[22%] left-[74%] w-max text-xl text-white tracking-wider`}>Photography & Graphic Arts</h2>
				</div>
			</div>

			<div className='bg-black py-1 flex flex-col lg:py-[0.5vh] lg:gap-[0.5vh] lg:flex-row'>

						<Image
								src={SplashImage}
								alt="spalshImage"
								priority
								className="w-full h-54 object-cover object-bottom"
							/>

			<div className={`
			w-full h-18 flex gap-1 pt-1
			lg:gap-[0.5vh] lg:pt-0 lg:h-[40vh] lg:w-0 lg:flex-1 lg:flex-col lg:flex-wrap
			`}>
					<Image
						src={reelPhoto1}
						alt="spalshImage"
						priority
						className="h-full object-cover lg:w-[50%]"
					/>
					<Image
						src={reelPhoto2}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-full object-cover lg:h-0 lg:flex-1 lg:w-[50%]"
					/>
					<Image
						src={reelPhoto3}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-full object-cover lg:h-0 lg:flex-1 lg:w-[50%]"
					/>

			</div>
			</div>
		</>
			)
			}