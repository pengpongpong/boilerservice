"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

const NavLink = ({ title, url }: { title: string, url: string }) => {
    return <Link href={url} className="daisy_btn daisy_btn-ghost rounded-xl text-lg tracking-widest text-white z-10">{title}</Link>
}
const NavLinkMobile = ({ title, url }: { title: string, url: string }) => {
    return <Link href={url} className="daisy_btn daisy_btn-ghost rounded-xl text-2xl tracking-widest text-base-100">{title}</Link>
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handleMenu = () => {
        if (!showMenu) {
            return setShowMenu(true)
        } else {
            return setShowMenu(false)
        }
    }
    const style = clsx({ "menu__list": !showMenu, "menu__list menu__list--open": showMenu })

    return (
        <>
            {/* desktop nav */}
            <header className="hidden lg:block sticky top-0 bg-base-100 z-10 relative">
                <nav className="my-3 mx-12 flex justify-center items-center">
                    <Link href="/" className=" flex flex-col font-headline uppercase">
                        <span className="text-5xl tracking-widest">Paulmichl</span>
                        <span className="text-xl text-center">Die Boilerspezialisten</span>
                    </Link>

                    {/* <div className="flex flex-col gap-2 justify-center items-center font-text">
                        <span className="tracking-widest text-sm">Montag - Freitag</span>
                        <span className="tracking-widest text-sm border-t border-primary pt-2 w-full text-center">08:00 - 17:00</span>
                    </div> */}

                </nav>
                <nav className="p-8 bg-primary h-10 flex gap-32 justify-center items-center font-ubuntu">
                    <NavLink
                        title="Home"
                        url="/"
                    />
                    <NavLink
                        title="Boilerservice"
                        url="/boilerservice"
                    />
                    <NavLink
                        title="Galerie"
                        url="/galerie"
                    />
                    <NavLink
                        title="Über uns"
                        url="/ueber-uns"
                    />
                    <NavLink
                        title="Kontakt"
                        url="/kontakt"
                    />
                </nav>
                <div className="bookmark absolute top-40 mt-8 right-0 flex justify-end">
                    <div className="flex flex-col items-end">
                        <div className="triangle_top"></div>
                        <div className="triangle_bottom"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 font-text tracking-wide max-w-fit px-4 py-2 bg-red text-white">
                        <span className="flex justify-center items-center gap-2 text-sm">
                            <Image width={25} height={25} src="bx-phone.svg" alt="" />
                            <a href="tel:00436641522352">+43 664 152-23-52</a>
                        </span>
                        <span className="flex justify-center items-center gap-2 text-sm border-t border-white pt-2">
                            <Image width={25} height={25} src="bx-envelope.svg" alt="" />
                            <a href="mailto:paulmichl.gmbh@gmail.com">paulmichl.gmbh@gmail.com</a>
                        </span>
                    </div>
                </div>

            </header>

            {/* mobile nav */}
            <header className="lg:hidden">
                <nav className="my-3 mx-4 flex flex-col justify-center items-center">
                    <Link href="/" className="my-2 uppercase font-headline text-4xl tracking-widest">Paulmichl</Link>

                    <div className="my-2 flex gap-2 justify-center items-center font-text">
                        <span className="tracking-wide text-sm whitespace-nowrap">Montag - Freitag</span>
                        <span className="tracking-wide text-sm border-l border-primary pl-2 text-center">08:00 - 17:00</span>
                    </div>
                    <div className="w-full my-2 flex justify-between items-center relative menu">
                        <div className="flex flex-col justify-center items-start gap-2 font-text tracking-wide">
                            <span className="flex justify-center items-center gap-2 text-sm">
                                <Image width={25} height={25} src="bx-phone.svg" alt="" />
                                <a href="tel:00436641522352">+43 664 152-23-52</a>
                            </span>
                            <span className="flex justify-center items-center gap-2 text-sm border-t border-primary pt-2">
                                <Image width={25} height={25} src="bx-envelope.svg" alt="" />
                                <a href="mailto:paulmichl.gmbh@gmail.com">paulmichl.gmbh@gmail.com</a>
                            </span>
                        </div>
                        <label tabIndex={0} className="daisy_btn daisy_btn-circle" onClick={handleMenu} aria-label="open/close navigation menu">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        </label>
                    </div>
                    <ul tabIndex={0} className={`${style} bg-primary p-4 flex flex-col justify-center items-center`}>
                        <li>
                            <NavLinkMobile
                                title="Home"
                                url="/"
                            />
                        </li>
                        <li>
                            <NavLinkMobile
                                title="Boilerservice"
                                url="/boilerservice"
                            />
                        </li>
                        <li>
                            <NavLinkMobile
                                title="Galerie"
                                url="/galerie"
                            />
                        </li>
                        <li>
                            <NavLinkMobile
                                title="Über uns"
                                url="/ueber-uns"
                            />
                        </li>
                        <li>
                            <NavLinkMobile
                                title="Kontakt"
                                url="/kontakt"
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Navbar