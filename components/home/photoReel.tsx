import Image from "next/image";

import photoWheel1 from "@/public/images/photoWheel/photo1.jpg";
import photoWheel2 from "@/public/images/photoWheel/photo2.jpg";
import photoWheel3 from "@/public/images/photoWheel/photo3.jpg";
import photoWheel4 from "@/public/images/photoWheel/photo4.jpg";
import photoWheel5 from "@/public/images/photoWheel/photo5.jpg";

export default function PhotoReel() {
	return (
		<div className="h-28 overflow-hidden flex gap-2">
			<Image
				src={photoWheel1}
				alt="photo"
				priority
				placeholder="blur"
				className="h-[100%] w-auto"
			/>

			<Image
				src={photoWheel2}
				alt="photo"
				priority
				placeholder="blur"
				className="h-[100%] w-auto"
			/>

			<Image
				src={photoWheel3}
				alt="photo"
				priority
				placeholder="blur"
				className="h-[100%] w-auto"
			/>

			<Image
				src={photoWheel4}
				alt="photo"
				priority
				placeholder="blur"
				className="h-[100%] w-auto"
			/>
		</div>
	);
}
