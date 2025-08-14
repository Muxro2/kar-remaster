import Link from 'next/link'
import Collection from '@/components/collection'
import CollectionShort from '@/components/collectionShort'


export default function PhotographyPage () {

    return (
        <div className="bg-black w-[100vw] flex flex-wrap">
            <Link href='/photography/wildwest'>
            <Collection></Collection>
            </Link>
            <Link href='/photography/artgallery'>
            <Collection></Collection>
            </Link>
            <CollectionShort></CollectionShort>
            <CollectionShort></CollectionShort>
            <Collection></Collection>
            <Collection></Collection>
        </div>
    )
} 