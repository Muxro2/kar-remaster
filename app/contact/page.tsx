import Image from 'next/image'
import headshot from '@/public/images/contactPage/headshot.jpeg'

export default function ContactPage () {
    return (
        <>
        <div className="w-[50%] ">
            <Image
                src={headshot}
                alt="headshot"
                width={300}
                height={500}
            />
        </div>
        <h2>
            I’m a Florida-based photographer and graphic designer with a passion for visual storytelling. Whether behind the camera or at the design desk, I love bringing creative ideas to life with a personal touch. If you’re interested in working together or just want to connect, I’d love to hear from you.
        </h2>
        </>
    )
}