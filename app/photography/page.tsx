import Link from 'next/link'
import Collection from '@/components/collection'
import CollectionShort from '@/components/collectionShort'
import { getAlbums } from '@/lib/getAlbums'


export default function PhotographyPage () {


    return (
        <div className="bg-black w-[100vw] flex flex-wrap gap-0.5">
            <Collection id='wildwest'></Collection>
            <Collection id='artgallery'></Collection>
            <CollectionShort id='mayordavis'></CollectionShort>
            <CollectionShort id='portraits'></CollectionShort>
            <Collection id='studio'></Collection>
            <Collection id='animals'></Collection>
            <CollectionShort id='nature'></CollectionShort>
            <CollectionShort id='appleproject'></CollectionShort>
        </div>
    )
} 