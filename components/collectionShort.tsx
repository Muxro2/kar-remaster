import Image from 'next/image'

export default function Collection() {
    return(
        <div className="relative flex w-[100vw]">
            <div className="bg-gray-500 flex">
                <div className="flex flex-1">
                <Image
                src="https://res.cloudinary.com/dmkz7axbh/image/upload/v1753739510/b95e7205-c5b4-497e-9d04-d79dc5b6eba4_rw_3840_kqlzab.jpg"
                alt="photo"
                width={600}
                height={300}
                />
                </div>
                <div className="flex flex-1">
                <Image
                src="/images/photoWheel/photo4.jpg"
                alt="photo"
                width={600}
                height={300}
                layout="responsive"
                />
                </div>
            
            </div>
            <div className="absolute bottom-0 bg-black/50 w-[100%] h-10 px-5 py-1 flex justify-between">
                <h2 className="text-amber-500 text-2xl font-serif">Wild West</h2>
                <h2 className="text-amber-500 text-xl font-serif">2024</h2>
            </div>
        </div>
    )
}