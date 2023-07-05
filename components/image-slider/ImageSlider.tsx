"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect } from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from "swiper/element/bundle";


import { SwiperOptions } from "swiper/types";
import Image from "next/image";

interface ImageProps {
    url: string;
}

const ImageSlider = ({ images }: { images: ImageProps[] }) => {
    register()

    useEffect(() => {
        const swiperParams: SwiperOptions = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            loop: true,
            breakpoints: {
                320: {
                    initialSlide: 1,
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    initialSlide: 2,
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                770: {
                    initialSlide: 2,
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1280: {
                    initialSlide: 2,
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
            effect: "coverflow",
            coverflowEffect: {
                rotate: 20,
                slideShadows: true,
            },
        };

        new Swiper(".swiper", swiperParams);
    }, [])


    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                {images.map(obj => (
                    <Image className="swiper-slide" key={obj.url} style={{ width: "auto", height: "auto", objectFit: "cover" }} width={400} height={300} src={obj.url} alt="" />
                ))}
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}

export default ImageSlider