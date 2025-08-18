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

			<div className="w-full h-16 pt-1 pb-3 flex justify-center content-center bg-black/60">
				<div className="relative flex z-10">
					<Image
						src={logo}
						alt="logo"
						priority
						className='w-40 h-24'
					/>
					<h2 className={`${font_seconday.className} text-xl -ml-10 mt-1.5 text-white text-md tracking-wider text-right leading-15`}>Photography & Graphic Arts</h2>
				</div>
			</div>

			<div className='bg-black py-1'>

			<div className="relative w-full h-54 overflow-hidden">

						<Image
								src={SplashImage}
								alt="spalshImage"
								priority
								placeholder="blur"
								className="-mt-8 object-cover"
							/>
			</div>

			<div className="w-full flex gap-1 pt-1">
				<div className="flex-1">
					<Image
						src={reelPhoto1}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-16 object-cover"
					/>
				</div>
				<div className="flex-1">
					<Image
						src={reelPhoto2}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-16 object-cover"
					/>
				</div>
				<div className="flex-1">
					<Image
						src={reelPhoto3}
						alt="spalshImage"
						priority
						placeholder="blur"
						className="h-16 object-cover"
					/>
				</div>

			</div>
			</div>
		</div>
			)
			}