import LatestOfferCard from "./LatestOfferCard";
import Awards from '@/Components/Home/Awards';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "@inertiajs/react";

export default function LatestEstates() {

    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 400,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="bg-gray-300 min-h-[70vh] flex flex-col items-center overflow-hidden">
                <div className="flex items-center justify-between lg:w-[1220px] w-[400px] py-[2em]">
                    <h1 className="text-left text-[1.2em] lg:text-[2.5em]">Latest Uploaded Estates</h1>
                    <Link className="hover:underline transition mr-3">
                        See all
                    </Link>
                </div>
                <div className="lg:w-[1260px] w-[440px] p-2">
                    <Slider {...settings}>
                        <LatestOfferCard />
                        <LatestOfferCard />
                        <LatestOfferCard />
                        <LatestOfferCard />
                        <LatestOfferCard />
                        <LatestOfferCard />
                    </Slider>
                </div>
                <Awards />
            </div>
        </>
    )
}