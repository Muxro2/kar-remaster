import Image from "next/image"
import Link from "next/link"
import { promises as fs } from 'fs'
import {getAlbums} from '@/lib/getAlbums'

export async function generateStaticParams() {
  return [
    {id: 'wildwest'},
    {id: 'artgallery'},
    {id: 'mayordavis'},
    {id: 'portraits'},
    {id: 'studio'},
    {id: 'animals'},
    {id: 'nature'},
    {id: 'appleproject'}
  ]
}

export default async function PhotographyGallery({
  params
}: {
  params: Promise<{ id: string }>
}) {

const collections = await getAlbums()
  const { id } = await params

  if (!collections[id]) return <p>Album not found</p>
  const links = collections[id].slice(2)

  return (
        <>
        <div className="relative pl-5 pt-8 mb-13 w-max h-max" >
        <h1 className=" text-white text-4xl font-serif font-bold">{collections[id][0].toUpperCase()}</h1>
        <h1 className="z-[-1] absolute bottom-[-30] right-[-100] text-neutral-400 text-7xl font-serif">{collections[id][1]}</h1>
        </div>
        <div className='bg-white h-0.5 w-[60%] ml-auto'></div>
      <div className="mx-auto mb-10 w-[80vw] flex flex-wrap gap-1 justify-center bg-black py-1 px-2">
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
