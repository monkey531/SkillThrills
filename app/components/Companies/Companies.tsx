"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}
// sample data
const data: Data[] = [
    {
        imgSrc: "/assets/carousel/airbnb.svg"
    },
    {
        imgSrc: "/assets/carousel/fedex.svg"
    },
    {
        imgSrc: "/assets/carousel/google.svg"
    },
    {
        imgSrc: "/assets/carousel/hubspot.svg"
    },
    {
        imgSrc: "/assets/carousel/microsoft.svg"
    },
    {
        imgSrc: "/assets/carousel/walmart.svg"
    },
    {
        imgSrc: "/assets/carousel/airbnb.svg"
    },
    {
        imgSrc: "/assets/carousel/fedex.svg"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center my-20'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-midnightblue text-2xl font-semibold">Trusted by companies of all sizes</h2>
                    <div className="py-14">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={116} height={36} />
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
