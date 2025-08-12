"use client"

import {useParams} from 'next/navigation';

export default function PhotographyGallery() {
    const {id} = useParams();

    return(
        <div>{id}</div>
    )
}