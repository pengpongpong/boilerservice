"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

const NavLink = ({ title, url }: { title: string, url: string }) => {
    return <Link href={url} className="daisy_btn daisy_btn-ghost rounded-xl text-lg tracking-widest text-white z-10">{title}</Link>
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
    const style = clsx({ "menu__list": !showMenu, "menu__list--open": showMenu })

    return (
        <>
            <header className="hidden lg:block sticky top-0 bg-base-100 z-10">
                <nav className="my-3 mx-12 flex justify-between items-center">
                    <Link href="/" className="uppercase font-headline text-5xl tracking-widest">Paulmichl</Link>
                    <div className="flex flex-col gap-2 justify-center items-center font-text">
                        <span className="tracking-widest text-sm">Montag - Freitag</span>
                        <span className="tracking-widest text-sm border-t border-primary pt-2 w-full text-center">08:00 - 17:00</span>
                    </div>
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
            </header>
            <header className="lg:hidden">
                <nav className="my-3 mx-8 flex flex-col justify-center items-center">
                    <Link href="/" className="uppercase font-headline text-4xl tracking-widest">Paulmichl</Link>
                    <div className="my-2 flex gap-2 justify-center items-center font-text">
                        <span className="tracking-wide text-sm whitespace-nowrap">Montag - Freitag</span>
                        <span className="tracking-wide text-sm border-l border-primary pl-2 w-full text-center">08:00 - 17:00</span>
                    </div>
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
                </nav>
                <nav className="w-full h-10 flex gap-32 justify-end items-center font-ubuntu">
                    <div className="w-full p-4 menu">
                        <label tabIndex={0} className="daisy_btn daisy_btn-circle" onClick={handleMenu}>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        </label>
                        <ul tabIndex={0} className={`${style} bg-primary`}>
                            <li>
                                <NavLink
                                    title="Home"
                                    url="/"
                                />
                            </li>
                            <li>
                                <NavLink
                                    title="Boilerservice"
                                    url="/boilerservice"
                                />
                            </li>
                            <li>
                                <NavLink
                                    title="Galerie"
                                    url="/galerie"
                                />
                            </li>
                            <li>
                                <NavLink
                                    title="Über uns"
                                    url="/ueber-uns"
                                />
                            </li>
                            <li>
                                <NavLink
                                    title="Kontakt"
                                    url="/kontakt"
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar