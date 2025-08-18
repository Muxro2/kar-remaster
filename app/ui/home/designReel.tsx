import Image from "next/image";

import designWheel1 from "@/public/images/designWheel/photo1.png";
import designWheel2 from "@/public/images/designWheel/photo2.png";
import designWheel3 from "@/public/images/designWheel/photo3.png";
import designWheel4 from "@/public/images/designWheel/photo4.png";
import designWheel5 from "@/public/images/designWheel/photo5.png";
import designWheel6 from "@/public/images/designWheel/photo6.png";
import designWheel7 from "@/public/images/designWheel/photo7.png";

export default function DesignReel() {
	return (
		<div className="overflow-hidden bg-black">
			<div className="animate-scroll-reverse w-max h-28 flex gap-1 py-1">
					<Image
								src={designWheel1}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel2}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel3}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel4}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel5}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>


					<Image
								src={designWheel1}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel2}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel3}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel4}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
					<Image
								src={designWheel5}
								alt="photo"
								priority
								placeholder="blur"
								className="h-[100%] w-auto"
					/>
			</div>
		</div>
	);
}
