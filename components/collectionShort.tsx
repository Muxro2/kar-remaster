import Image from 'next/image'
import Link from 'next/link'
import { getAlbums } from '@/lib/getAlbums'

export default async function CollectionShort({id, reverse}: {id: string, reverse: boolean}) {
    const collections = await getAlbums()
    const links = collections[id]

    return(
        <Link href={`/photography/${id}`}>
            <div className={`relative flex w-[100vw] gap-0.5 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
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
                    <h2 className="absolute drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] z-10 bottom-[-20] px-5 text-white text-4xl font-serif font-bold">{links[0].toUpperCase()}</h2>

        </div>
        </Link>
    )
}