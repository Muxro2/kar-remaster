import Image from 'next/image'
import Link from 'next/link'
import { getAlbums } from '@/lib/getAlbums'

export default async function CollectionShort({id}: {id: string}) {
    const collections = await getAlbums()
    const links = collections[id]

    return(
        <div className="relative flex w-[100vw]">
            <div className="bg-gray-500 flex">
                <div className="flex flex-1">
                <Image
                src={links[3]}
                alt="photo"
                width={600}
                height={300}
                />
                </div>
                <div className="flex flex-1">
                <Image
                src={links[4]}
                alt="photo"
                width={600}
                height={300}
                layout="responsive"
                />
                </div>
            
            </div>
            <div className="absolute bottom-0 bg-black/70 w-[100%] h-10 px-5 py-1 flex justify-between">
                <h2 className="text-amber-500 text-2xl font-serif">Wild West</h2>
                <h2 className="text-amber-500 text-xl font-serif">2024</h2>
            </div>
        </div>
    )
}