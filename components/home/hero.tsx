import Image from "next/image";

import SplashImage from "@/public/images/hero/bigSplash.jpg";
import reelPhoto1 from "@/public/images/hero/reelPhoto1.jpg";
import reelPhoto2 from "@/public/images/hero/reelPhoto2.jpg";
import reelPhoto3 from "@/public/images/hero/reelPhoto3.jpg";
import logo from "@/public/images/hero/logo.png";

export default function Hero() {
	return (
		<div>

			<div className="w-full pt-1 pb-3 flex justify-center content-center bg-black/60">
				<div className="relative w-30">
					<Image
						src={logo}
						alt="logo"
						priority
					/>
				</div>
				<h2 className="text-white font-serif text-md tracking-wider text-right leading-15 ml-[-30]">Photography & Graphic Arts</h2>
			</div>

			<div className='bg-black py-1'>

			<div className="relative w-full aspect-7/4 overflow-hidden">

						<Image
								src={SplashImage}
								alt="spalshImage"
								priority
								placeholder="blur"
								className="mt-[-20]"
							/>
			</div>

			<div className="w-full flex gap-1 pt-1">
				<div className="flex-1">
					<Image
						src={reelPhoto1}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>
				<div className="flex-1">
					<Image
						src={reelPhoto2}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>
				<div className="flex-1">
					<Image
						src={reelPhoto3}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>

			</div>
			</div>
		</div>
			)
			}