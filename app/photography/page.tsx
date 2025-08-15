import Link from 'next/link'
import Collection from '@/components/collection'
import CollectionShort from '@/components/collectionShort'
import { getAlbums } from '@/lib/getAlbums'


export default function PhotographyPage () {


    return (
        <div className="bg-black w-[100vw] flex flex-wrap gap-0.5">
            <Collection id='wildwest' reverse={false}></Collection>
            <Collection id='artgallery' reverse={true}></Collection>
            <CollectionShort id='mayordavis' reverse={false}></CollectionShort>
            <CollectionShort id='portraits' reverse={true}></CollectionShort>
            <Collection id='studio' reverse={false}></Collection>
            <Collection id='animals' reverse={true}></Collection>
            <CollectionShort id='nature' reverse={false}></CollectionShort>
            <CollectionShort id='appleproject' reverse={true}></CollectionShort>
        </div>
    )
} 