import Image from 'next/image';
import design1 from '@/public/images/designWheel/photo1.png';

export default function BannerFlipped() {
	return (
		<div className="w-[100vw] flex flex-row-reverse bg-amber-400">
			<div className="flex-1">
			<Image
				src={design1}
				alt="photo"
				width={600}
				height={300}
				layout="responsive"
			/>
			</div>
			<div className="flex-1 pl-5 content-center">
				<h2 className="text-white">Design Title</h2>
				<h3 className="text-white"> A bit about this piece. </h3>
		  </div>
		</div>
	)
}