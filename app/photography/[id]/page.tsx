import Image from "next/image"
import Link from "next/link"
import { promises as fs } from 'fs'
import Data from '@/app/albums.json'
import {getAlbums} from '@/lib/getAlbums'
import DyImage from "@/components/dyImage"


export async function generateStaticParams() {
  const data = Data
  const paths = Object.keys(Data.photography.collections).map((collection) => {
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

  if (!collections[id]) return <p>Album not found</p>
  const links = collections[id].slice(2)

  return (
        <>
        <div className="relative pl-5 pt-8 mb-13 w-max h-max" >
        <h1 className=" text-white text-4xl font-serif font-bold">{collections[id][0].toUpperCase()}</h1>
        <h1 className="z-[-1] absolute -bottom-8 -right-30 text-neutral-400 text-7xl font-serif">{collections[id][1]}</h1>
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
         placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiIC8+PC9zdmc+"
    
         />
      ))}
    </div>
      </>
  )
}
``
