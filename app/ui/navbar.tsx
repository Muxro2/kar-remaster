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
        <div className='relative w-[100vw] flex justify-around z-100 bg-black text-neutral-400'>
            {links.map((link, i) => {
                return (
                <Link
                 key={i}
                 href={link.href} 
                 className={clsx(
                    'flex-1 h-10 content-center text-center',
                    {'bg-neutral-800' : pathname === link.href}
                )}>
                    {link.title}
                </Link>
                )
            })}
        </div>
    )
}