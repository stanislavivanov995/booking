import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import InputLabel from "../InputLabel";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import OptionsMenu from "../OptionsMenu";
import TextInput from "../TextInput";

export default function SearchBar({ categories }) {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [placeId, setPlaceId] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        checkInDate: "",
        checkOutDate: "",
        place_id: "",
        category_id: ""
    });


    useEffect(() => {
        if (selectedCategory) {
            setData("category_id", selectedCategory.id);
        } else {
            setData("category_id", 1);
        }
    }, [selectedCategory]);

    const handleCategorySelect = (selectedItem) => {
        setSelectedCategory(selectedItem);
        setData("category_id", selectedItem.id);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log(data);
        // const formData = new FormData(event.currentTarget);
        // const { location, checkIn, checkOut, category } = Object.fromEntries(formData);

        // try {
        //     const results = await fetch(`http://localhost:8000/api/real-estates?latitude=${coordinates.lat}&longitude=${coordinates.lng}&category=${category}`)

        //     router.push(`/public/search/results?lat=${coordinates.lat}&lng=${coordinates.lng}&checkIn=${checkIn}&checkOut=${checkOut}&category=${category}`);
        //     console.log(results);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>
            <div className="lg:w-[1200px] w-[45%] lg:p-1 pt-2 bg-white shadow-2xl absolute lg:bottom-[-10px] bottom-[-15px] rounded-lg">
                <form onSubmit={(e) => handleSubmit(e)} className="flex lg:flex-row lg:gap-0 gap-1 flex-col justify-evenly items-center lg:p-2">
                    <div className="flex items-center lg:gap-5 gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        {/* Search Input */}
                        <div className="lg:w-[250px] w-[210px] mt-1">

                            <GooglePlacesAutocomplete
                                apiKey="AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo"
                                selectProps={{
                                    placeId,
                                    onChange: (e) =>
                                        setData("place_id", e.value.place_id)
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" /></svg>
                        <OptionsMenu
                            options={categories}
                            isFocused={false}
                            onSelect={handleCategorySelect}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="checkInDate"
                            className="block lg:w-[250px] w-[210px] lg:m-0 ml-8"
                            name="checkInDate"
                            type="date"
                            onChange={(e) => setData("checkInDate", e.target.value)}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="checkOutDate"
                            className="block lg:w-[250px] w-[210px] lg:m-0 ml-8"
                            name="checkOutDate"
                            type="date"
                            onChange={(e) => setData("checkOutDate", e.target.value)}
                        />
                    </div>
                    <button type="submit" className="lg:m-0 mt-2 items-center lg:border lg:border-black lg:rounded-full rounded-b-lg p-2 cursor-pointer lg:fill-white fill-white lg:bg-black bg-black lg:w-[40px] w-full hover:bg-black hover:fill-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </button>
                </form >
            </div>
        </>
    )
}