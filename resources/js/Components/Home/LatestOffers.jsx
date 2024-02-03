import LatestOfferCard from "./LatestOfferCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "@inertiajs/react";

export default function LatestEstates({ estates, title }) {
    const settings = {
        centerMode: true,
        centerPadding: "10px",
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

    const handleClick = async (id) => {
        try {
            await axios.post(route("estate.click", id));
        } catch (error) {
            console.error("Error incrementing estate click:", error);
        }
    };

    return (
        <>
            {/* <div className="bg-gray-300 min-h-[70vh] flex flex-col items-center overflow-hidden"> */}
            <div className="flex items-center justify-between xl:w-[1260px] lg:w-[1000px] sm:w-[700px] w-[440px] py-[2em]">
                <h1 className="font-sans md:font-serif text-left text-[1.2em] xl:text-[2.5em] pl-5">
                    {title}
                </h1>
                <Link className="hover:underline transition mr-8">See all</Link>
            </div>
            <div className="xl:w-[1260px] lg:w-[1000px] sm:w-[700px] w-[440px] p-2 gap-x-4">
                <Slider {...settings}>
                    {estates.map((estate) => (
                        <LatestOfferCard
                            key={estate.id}
                            estate={estate}
                            place_id={estates[0].place_id}
                        />
                    ))}
                </Slider>
            </div>
            {/* </div> */}
        </>
    );
}
