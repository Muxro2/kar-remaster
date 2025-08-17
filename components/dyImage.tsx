import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';


export default async function DyImage({src, alt}: {src: string, alt: string}) {



    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    })

    const { base64, metadata } = await getPlaiceholder(buffer)

    return <Image 
        src={src}
        alt={alt}
        width={metadata.width}
        height={metadata.height}
        placeholder='blur'
        blurDataURL={base64}
        unoptimized
    />
}