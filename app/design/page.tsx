import Image from "next/image"
import { getAlbums } from "../lib/getAlbums"
import { link } from "fs"

export default async function DesignPage() {
    const collections = await getAlbums()
    const links = collections.design

    return (
        <>
            <div className="relative pl-5 mt-8 mb-6 w-max h-max" >
                <h1 className=" text-white text-6xl font-bold">DESIGN</h1>
                <div className='absolute top-[42%] left-14 bg-white h-1 w-50 ml-auto'/>
            </div>
            <div className='bg-white h-0.5 w-[60%] ml-auto'/>

                <div className="mb-10 w-full flex flex-wrap gap-1 justify-center bg-black py-1 px-2">
                    {links.map((src: string, i: number) => (
                        <Image
                            key={i}
                            src={src}
                            alt={`photo ${i}`}
                            width={350}
                            height={250}
                            className="w-full"
                        />
                    ))}
                </div>
        </>
    )
} 