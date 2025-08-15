import Image from 'next/image'
import Link from 'next/link'
import { getAlbums } from '@/lib/getAlbums'

export default async function Collection({id, reverse}: {id: string, reverse: boolean}) {
    const collections = await getAlbums()
    const links = collections[id]

    return(
        <Link href={`/photography/${id}`}>
            <div className={`relative flex w-[100vw] gap-0.5 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="bg-gray-500 flex-3">
                    <Image
                    src={links[3]}
                    alt="photo"
                    width={600}
                    height={300}
                    layout='responsive'
                    />
                </div>
                <div className="bg-gray-500 flex flex-col flex-1">
                    <Image
                    src={links[4]}
                    alt="photo"
                    width={600}
                    height={300}
                    layout="responsive"
                    />
                    <Image
                    src={links[5]}
                    alt="photo"
                    width={600}
                    height={300}
                    layout="responsive"
                    />
                    <Image
                    src={links[6]}
                    alt="photo"
                    width={600}
                    height={300}
                    layout="responsive"
                    />
                </div>
                    <h2 className="absolute drop-shadow-[0px_3.2px_0px_rgba(0,0,0,1)] z-10 bottom-[-20] px-5 text-white text-4xl font-serif font-bold">{links[0].toUpperCase()}</h2>

            </div>
        </Link>
    )
}