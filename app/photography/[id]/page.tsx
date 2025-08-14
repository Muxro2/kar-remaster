import Image from "next/image"
import Link from "next/link"
import { promises as fs } from 'fs'
import {getAlbums} from '@/lib/getAlbums'

type PageProps = {
  params: {
    id: string
  }
}

export default async function PhotographyGallery({params}: any) {

const collections = await getAlbums()
  const { id } = params

  const links = collections[id].slice(2)

  return (
        <>
        <Link href='/photography' className='absolute pt-3 text-sm font-light'>Back</Link>
        <h1 className="text-center p-2 text-2xl">{collections[id][0]} - {collections[id][1]}</h1>
      <div className="flex flex-wrap gap-0.5 justify-center">
      {links.map((src: string, i: number) => (
        <Image 
        key={i} 
        src={src} 
        alt={`photo ${i}`}
        width={300}
        height={100}
        unoptimized
        style={{ objectFit: 'contain' }}
         />
      ))}
    </div>
      </>
  )
}
``
