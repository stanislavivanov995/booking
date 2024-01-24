import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import AutoComplete from 'react-google-autocomplete'
import { geocodeByPlaceId } from "react-google-places-autocomplete";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function SearchBar({ newSearchValues, className }) {
    const [placeId, setPlaceId] = useState(
        newSearchValues?.place_id ? newSearchValues.place_id : ""
    );

    const [location, setLocation] = useState("");


    try {
        if (newSearchValues.place_id) {
            geocodeByPlaceId(placeId)
                .then((results) => setLocation(results[0].formatted_address))
                .catch((error) => console.error(error));
        }
    } catch (error) {
        console.log(error);
    }



    const [startDate, setStartDate] = useState(
        newSearchValues?.checkInDate ? new Date(newSearchValues.checkInDate) : new Date()
    );

    const [endDate, setEndDate] = useState(
        newSearchValues?.checkOutDate ? new Date(newSearchValues.checkOutDate) : new Date()
    );


    const { data, setData, post, processing, errors } = useForm({
        place_id: placeId,
        check_in: startDate,
        check_out: endDate,
    });


    const handleCheckInDate = (selectedItem) => {
        setData("check_in", selectedItem);
    };

    const handleCheckOutDate = (selectedItem) => {
        setData("check_out", selectedItem);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const checkInDate = startDate.toLocaleDateString();
        const checkOutDate = endDate.toLocaleDateString();

        try {
            if (!data.place_id) { throw new Error("Should be selected location!") }
            router.get("/results", data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div
                className={`xl:w-[1200px] w-[75%] lg:p-1 pt-2 bg-white shadow-2xl absolute lg:bottom-[-10px] bottom-[-15px] rounded-lg ${className}`}
            >
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex xl:flex-row lg:gap-0 gap-1 flex-col justify-evenly items-center lg:p-2"
                >
                    <div className="flex items-center lg:gap-5 gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 384 512"
                        >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                        {/* Search Input */}
                        <div className="lg:w-[350px] w-[210px] mt-1">
                            <AutoComplete
                                apiKey="AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo"
                                className="mt-1 block w-full border border-gray-300 rounded-lg"
                                defaultValue={location}
                                onPlaceSelected={(place) => {
                                    setData("place_id", place.place_id)
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 mt-1">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                handleCheckInDate(date);
                                setStartDate(date);
                            }}
                            selectsStart
                            startDate={startDate}
                            minDate={new Date()}
                            endDate={endDate}
                            className="block lg:w-[250px] w-[210px] lg:m-0 ml-8 border border-[#d1d5db] rounded-lg"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => {
                                handleCheckOutDate(date);
                                setEndDate(date);
                            }}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="block lg:w-[250px] w-[210px] lg:m-0 ml-8 border border-[#d1d5db] rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="xl:m-0 mt-2 items-center lg:border lg:border-black lg:rounded-full rounded-b-lg p-2 cursor-pointer lg:fill-white fill-white lg:bg-black bg-black xl:w-[40px] w-full hover:bg-black hover:fill-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full"
                            height="20"
                            width="20"
                            viewBox="0 0 512 512"
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>
                </form>
            </div>
        </>
    );
}