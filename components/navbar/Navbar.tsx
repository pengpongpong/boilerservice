import React from 'react'
import Link from "next/link"
import Image from "next/image"

const NavLink = ({ title, url }: { title: string, url: string }) => {
    return <Link href={url} className="daisy_btn daisy_btn-ghost rounded-xl text-lg tracking-widest text-white">{title}</Link>
}

const Navbar = () => {
    return (
        <header className="sticky top-0 bg-base-100">
            <nav className="my-3 mx-6 flex justify-between items-center">
                <Link href="/" className="uppercase font-headline text-5xl tracking-widest">Paulmichl</Link>
                <span className="tracking-widest font-text text-xl">Montag - Freitag | 08:00 - 17:00</span>
                <div className="flex gap-8 font-text tracking-wide">
                    <span className="flex justify-center items-center gap-4 text-xl">
                        <Image width={50} height={50} src="bx-phone.svg" alt="" />
                        <a href="tel:00436641522352">+43 664 152-23-52</a>
                    </span>
                    <span className="flex justify-center items-center gap-4 text-xl">
                        <Image width={50} height={50} src="bx-envelope.svg" alt="" />
                        <a href="mailto:paulmichl.gmbh@gmail.com">paulmichl.gmbh@gmail.com</a>
                    </span>
                </div>
            </nav>
            <nav className="p-8 bg-primary h-10 flex justify-center items-center font-text">
                <NavLink
                    title="Home"
                    url=""
                />
                <NavLink
                    title="Boilerservice"
                    url=""
                />
                <NavLink
                    title="Galerie"
                    url=""
                />
                <NavLink
                    title="Über uns"
                    url=""
                />
                <NavLink
                    title="Kontakt"
                    url=""
                />
            </nav>
        </header>
    )
}

export default Navbar