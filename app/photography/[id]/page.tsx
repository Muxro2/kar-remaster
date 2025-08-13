"use client"

import Image from "next/image"
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function PhotographyGallery() {
    const { id } = useParams()

  const images = [
    "/images/hero/bigSplash.jpg",
    "/images/photoWheel/photo3.jpg",
    "/images/photoWheel/photo5.jpg",
    "/images/photoWheel/photo4.jpg",
    "/images/hero/bigSplash.jpg"
  ]

  return (
        <>
        <Link href='/photography' className='absolute pt-5'>Back</Link>
        <h1 className="text-center p-5 text-2xl">{id}</h1>
      <div className="flex flex-wrap gap-2 justify-center">
      {images.map((src, i) => (
        <ResponsiveImage key={i} src={src} alt={`photo ${i}`} />
      ))}
    </div>
      </>
  )
}

type ImageProps = {
    src: string,
    alt: string,
}

function ResponsiveImage({ src, alt }: ImageProps) {
  const [ratio, setRatio] = useState(4/3) // default square

  return (
    <div
      className="relative h-35"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded"
        onLoadingComplete={(img) =>
          setRatio(img.naturalWidth / img.naturalHeight)
        }
      />
    </div>
  )
}
``
