import Link from 'next/link';

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

const socials = [
		{
				title: 'Behance',
				href: 'https://www.behance.net/karinaprezeau'
		},
		{
				title: 'Instagram',
				href: 'https://www.instagram.com/karinaprezeau/'
		},
		{
				title: 'LinkedIn',
				href: 'https://www.linkedin.com/in/karina-prezeau-9517a7221/'
		},
		{
				title: 'Github',
				href: 'https://github.com/kar-03'
		},
]


export default function Footer() {
	return (
  <footer className="h-max bg-black pl-4 py-6">
		<h2 className="text-2xl font-bold">
					Karina Prezeau
		</h2>
		<h2 className="text-xl">
					Photography & Graphic Design
		</h2>
		<div className='flex py-4'>
			<ul className='flex-1 flex flex-col gap-2 text-lg'>
				<h1 className='text-xl font-bold'>Explore</h1>
				{links.map((link, i) => {
          return (
					<li key={i}>
						<Link href={link.href}>{link.title}</Link>
					</li>
					)
				})}
			</ul>
			<ul className='flex-1 flex flex-col gap-2 text-lg'>
			  <h1 className='text-xl font-bold'>Follow</h1>
				{socials.map((link, i) => {
					return (
						<li key={i}>
						  <Link href={link.href}>{link.title}</Link>
					  </li>
					)
				})}
			</ul>
		</div>
		<h1 className="font-xs">&copy; Karina Prezeau 2025. All rights reserved</h1>
	</footer>
		)
}