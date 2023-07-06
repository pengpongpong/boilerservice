import CardContainer from "@/components/card/Card"

import React, { useRef } from 'react'



const GaleriePage = () => {
    const images = [
        { url: "https://swiperjs.com/demos/images/nature-1.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-2.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-3.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-4.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-5.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-6.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-7.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-8.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-9.jpg" },
        { url: "https://swiperjs.com/demos/images/nature-10.jpg" },
    ]



    return (
        <>
            <header>
                <h1>Galerie</h1>
            </header>
            <main className="flex-grow p-8">
                <CardContainer images={images} />
            </main>
        </>
    )
}

export default GaleriePage