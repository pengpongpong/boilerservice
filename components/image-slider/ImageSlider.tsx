"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'
import Image from "next/image";
import Script from "next/script";

interface ImageProps {
    url: string;
}

const ImageSlider = ({ images, slidesPerView }: { images: ImageProps[], slidesPerView: number }) => {
    return (
        <>
            <swiper-container
                loop="true"
                autoplay-delay="5000"
                autoplay-disable-on-interaction="true"
                effect="coverflow"
                coverflow-effect-rotate="20"
                coverflow-effect-slide-shadows="true"
                navigation="true"
                pagination="true"
                slides-per-view={`${slidesPerView}`}
                initial-slide="1"
                space-between="10"
                class="h-[30rem]"
            >
                {images.map(obj => (
                    <swiper-slide key={obj.url}>
                        <Image className="swiper-slide" width={400} height={400} src={obj.url} alt="" />
                    </swiper-slide>
                ))}
            </swiper-container>
            <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></Script>
        </>

    )
}

export default ImageSlider