import Image from "next/image";

import SplashImage from "@/public/images/hero/bigSplash.jpg";
import reelPhoto1 from "@/public/images/hero/reelPhoto1.jpg";
import reelPhoto2 from "@/public/images/hero/reelPhoto2.jpg";
import reelPhoto3 from "@/public/images/hero/reelPhoto3.jpg";
import logo from "@/public/images/hero/logo.png";

export default function Hero() {
	return (
		<>

			<div className="relative w-full aspect-3/2">
				<div className="absolute w-full h-full z-1 flex p-2 justify-between backdrop-blur-[1px] bg-black/5">
					<div className="relative w-30 h-20">
					<Image
						src={logo}
						alt="logo"
						fill
						priority
					/>
					</div>
					<h2 className="text-white font-serif text-md leading-7.5 tracking-wider text-right">Photography &<br/>Graphic Arts</h2>
				</div>

						<Image
								src={SplashImage}
								alt="spalshImage"
								fill
								priority
								placeholder="blur"
							/>
			</div>

			<div className="relative w-full aspect-48/9 flex">
				<div className="flex-1 mx-[2%] mt-[4%] rounded-lg overflow-hidden">
					<Image
						src={reelPhoto1}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>
				<div className="flex-1 mx-[2%] mt-[4%] rounded-lg overflow-hidden">
					<Image
						src={reelPhoto2}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>
				<div className="flex-1 mx-[2%] mt-[4%] rounded-lg overflow-hidden">
					<Image
						src={reelPhoto3}
						alt="spalshImage"
						priority
						placeholder="blur"
					/>
				</div>

				</div>
		</>
			)
			}