'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Photography',
        href: '/photography'
    },
    {
        title: 'Design',
        href: '/design'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
]

export default function Navbar() {
    const pathname = usePathname()

    return(
        <div className='relative w-[100vw] h-10 lg:h-[5vh] flex justify-around z-100 bg-black lg:text-[3vh] text-neutral-400'>
            {links.map((link, i) => {
                return (
                <Link
                 key={i}
                 href={link.href} 
                 className={clsx(
                    'flex-1 content-center text-center',
                    {'bg-neutral-800' : pathname === link.href}
                )}>
                    {link.title}
                </Link>
                )
            })}
        </div>
    )
}