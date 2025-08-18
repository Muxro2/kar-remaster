import Image from 'next/image'
import Link from 'next/link'
import { getAlbums } from '@/app/lib/getAlbums'

export default async function Collection({id, reverse}: {id: string, reverse: boolean}) {
    const collections = await getAlbums()
    const links = collections.photography[id]

    return(
        <Link href={`/photography/${id}`}>
            <div className={`relative flex w-[100vw] gap-0.5 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="relative flex-3">
                    <Image
                    src={links[2]}
                    alt="photo"
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiIC8+PC9zdmc+"
                    className='object-cover'
                    />
                </div>
                <div className="bg-gray-500 flex flex-col flex-1">
                    <Image
                    src={links[3]}
                    alt="photo"
                    width={600}
                    height={300}
                             placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiIC8+PC9zdmc+"

                    />
                    <Image
                    src={links[4]}
                    alt="photo"
                    width={600}
                    height={300}
                             placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiIC8+PC9zdmc+"

                    />
                    <Image
                    src={links[5]}
                    alt="photo"
                    width={600}
                    height={300}
                             placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiIC8+PC9zdmc+"

                    />
                </div>
                    <h2 className=" absolute drop-shadow-[0px_3.2px_0px_rgba(0,0,0,1)] z-10 -bottom-8 px-8 text-white text-6xl font-bold">{links[0].toUpperCase()}</h2>

            </div>
        </Link>
    )
}