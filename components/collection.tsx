import Image from 'next/image'
import Link from 'next/link'
import { getAlbums } from '@/lib/getAlbums'

export default async function Collection({id}: {id: string}) {
    const collections = await getAlbums()
    const links = collections[id]

    return(
        <Link href={`/photography/${id}`}>
            <div className="relative flex w-[100vw] gap-0.5">
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
                <div className="absolute bottom-0 bg-black/70 w-[100%] h-10 px-5 py-1 flex justify-between">
                    <h2 className="text-amber-500 text-2xl font-serif">{links[0]}</h2>
                    <h2 className="text-amber-500 text-xl font-serif">{links[1]}</h2>
                </div>
            </div>
        </Link>
    )
}