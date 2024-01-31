import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "@inertiajs/react";
import MostRatedOffersCard from "./MostRatedOffersCard";
import TopRatedOffers from "../TopRatedOffers/TopRatedOffers";

export default function MostRatedOffers({ mostRatedOffersRef }) {

    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 400,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
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
            <div ref={mostRatedOffersRef} className="bg-gray-300 h-[40em] lg:mt-0 mt-[50em] xl:mt-[4em] flex flex-col items-center overflow-hidden">
                <div className="flex items-center justify-between xl:w-[1260px] lg:w-[1000px] sm:w-[700px] w-[440px] py-[2em]">
                    <h1 className="text-left text-[1.2em] xl:text-[2.5em] pl-5">Most Rated Estates</h1>
                    <Link className="hover:underline transition mr-8">
                        See all
                    </Link>
                </div>
                <div className="xl:w-[1260px] lg:w-[1000px] sm:w-[700px] w-[440px] p-2">
                    <Slider {...settings}>
                        <MostRatedOffersCard />
                        <MostRatedOffersCard />
                        <MostRatedOffersCard />
                        <MostRatedOffersCard />
                        <MostRatedOffersCard />
                        <MostRatedOffersCard />
                    </Slider>
                </div>
            </div>
            <TopRatedOffers />
        </>
    )
}