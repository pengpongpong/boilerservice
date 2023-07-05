import DialogContainer from "@/components/image-slider/DialogContainer"
import ImageSliderThumbs from "@/components/image-slider/ImageSliderThumbs"
import React, { useRef } from 'react'


const GaleriePage = () => {
    const images = [
        {
            url: "/images/boiler1.jpeg"
        },
        {
            url: "/images/boiler2.jpeg"
        },
        {
            url: "/images/boiler3.jpeg"
        },
        {
            url: "/images/boiler4.jpeg"
        },
        {
            url: "/images/boiler5.jpeg"
        },
        {
            url: "/images/boiler6.jpeg"
        },
    ]



    return (
        <>
            <header>
                <h1>Galerie</h1>
            </header>
            <main className="flex-grow p-8">
                <DialogContainer>
                <ImageSliderThumbs images={images} />
                </DialogContainer>
            </main>
        </>
    )
}

export default GaleriePage