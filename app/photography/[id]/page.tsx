import Image from "next/image"
import Link from "next/link"
import { promises as fs } from 'fs'
import {getAlbums} from '@/app/lib/getAlbums'
import { notFound } from "next/navigation"

import { font_seconday } from "@/app/lib/fonts"


export async function generateStaticParams() {
  const data = await getAlbums()
  const paths = Object.keys(data.photography).map((collection) => {
    return {id: collection}
  })
  return paths
}

export default async function PhotographyGallery({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const collections = await getAlbums()
  const { id } = await params

  if (!collections.photography[id]) return notFound()
  const collection = collections.photography[id]
  const links = collection.slice(2)

  return (
        <>
        <div className="relative pl-5 pt-6 mb-13 w-max h-max" >
        <h1 className=" text-white text-6xl font-bold">{collection[0].toUpperCase()}</h1>
        <h1 className={`${font_seconday.className} z-[-1] absolute -bottom-8 -right-30 text-neutral-400 text-7xl`}>{collection[1]}</h1>
        </div>
        <div className='bg-white h-0.5 w-[60%] ml-auto'></div>
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
``
