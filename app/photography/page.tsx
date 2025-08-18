import Link from 'next/link'
import Collection from '@/app/ui/collection'
import CollectionShort from '@/app/ui/collectionShort'
import { getAlbums } from '@/app/lib/getAlbums'


export default function PhotographyPage () {


    return (
        <div className="bg-black w-[100vw] flex flex-wrap gap-0.5">
            <Collection id='wildwest' reverse={false}></Collection>
            <Collection id='gallery' reverse={true}></Collection>
            <CollectionShort id='mayor' reverse={false}></CollectionShort>
            <CollectionShort id='portraits' reverse={true}></CollectionShort>
            <Collection id='studio' reverse={false}></Collection>
            <Collection id='animals' reverse={true}></Collection>
            <CollectionShort id='nature' reverse={false}></CollectionShort>
            <CollectionShort id='apple' reverse={true}></CollectionShort>
        </div>
    )
} 