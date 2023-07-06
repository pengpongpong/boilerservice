"use client"
import React, { useRef } from 'react'
import Image from "next/image"
import ImageSliderThumbs from "../image-slider/ImageSliderThumbs"

interface ImageUrl {
    url: string
}

const Card = ({ url, initialSlide, images, index }: ImageUrl & { initialSlide: number, index: number, images: ImageUrl[] }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
        return
    }

    return (
        <>
            <div className="max-w-xs cursor-pointer" onClick={openModal}>
                <Image className="object-cover" src={url} alt="" width={300} height={400} />
            </div>

            <dialog className="daisy_modal w-full max-w-3/5" ref={dialogRef}>
                <form method="dialog" className="daisy_modal-box flex flex-col justify-center items-center w-full h-full max-h-full max-w-[60rem] m-12p-10">
                    <button className="daisy_btn daisy_btn-sm daisy_btn-circle daisy_btn-ghost absolute right-0 top-0">✕</button>
                    <ImageSliderThumbs images={images} initialSlide={index} />
                </form>
                <form method="dialog" className="daisy_modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>

    )
}

const CardContainer = ({ images }: { images: ImageUrl[] }) => {
    return (
        <section className="flex flex-wrap gap-8 justify-center items-center">
            {images.map((obj, index) => (
                <Card url={obj.url} key={obj.url} images={images} initialSlide={index} index={index} />
            ))}
        </section>
    )
}

export default CardContainer