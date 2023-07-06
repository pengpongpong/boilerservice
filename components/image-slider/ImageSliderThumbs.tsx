"use client"
import React from 'react'
import Image from "next/image";
import Script from "next/script";

interface ImageProps {
    url: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": any;
            "swiper-slide": any
        }
    }
}


const ImageSlider = ({ images, initialSlide }: { images: ImageProps[], initialSlide: number }) => {

    return (
        <>
            <swiper-container class="swiper-images h-80"
                thumbs-swiper=".swiper-thumbs" loop="true" space-between="10" navigation="true" initial-slide={`${initialSlide ?? 0}`}>
                {images.map(obj => (
                    <swiper-slide key={obj.url}>
                        <Image width={900} height={700} alt="" src={obj.url} />
                    </swiper-slide>
                ))}
            </swiper-container>

            <swiper-container class="swiper-thumbs h-80" loop="true" space-between="10" slides-per-view="4" free-mode="true"
                watch-slides-progress="true">
                {images.map(obj => (
                    <swiper-slide key={obj.url}>
                        <Image width={900} height={700} alt="" src={obj.url} />
                    </swiper-slide>
                ))}
            </swiper-container>

            <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></Script>
        </>

    )
}

export default ImageSlider