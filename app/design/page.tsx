import Link from 'next/link'
import Banner from '@/components/banner'
import BannerFlipped from '@/components/bannerFlipped'
export default function DesignPage () {

    return (
        <div className="w-[100vw] flex flex-wrap">
            <Banner/>
            <BannerFlipped/>
            <Banner></Banner>
        </div>
    )
} 