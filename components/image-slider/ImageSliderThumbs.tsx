"use client"
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import React, { useEffect, useRef } from 'react'
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


const ImageSlider = ({ images }: { images: ImageProps[] }) => {
    
    return (
        <>
            <swiper-container class="mySwiper"

                thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
            </swiper-container>

            <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
                watch-slides-progress="true">
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <Image width={1200} height={800} alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
            </swiper-container>

            <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></Script>
        </>

    )
}

export default ImageSlider