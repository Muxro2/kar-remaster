import Link from 'next/link'

export default function Navbar() {
    return(
        <div className='w-[100vw] py-5 flex justify-around z-100 bg-black text-neutral-400'>
        <Link href="/">Home</Link>
        <Link href="/photography">Photography</Link>
        <Link href="/design">Design</Link>
        <Link href="/contact">Contact</Link>
        </div>
    )
}