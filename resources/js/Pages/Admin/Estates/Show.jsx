import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";


export default function Show({ auth, estate, facilities, images }) {
    const [selectedImage, setSelectedImage] = useState(defaultImage);
    const estateId = window.location.pathname.split("/")[3];

    if (images.length > 0 && selectedImage === defaultImage) {
        setSelectedImage(images[0].url);
    }

    const handleSelectedImage = (event) => {
        setSelectedImage(event.target.src);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-[90%] m-auto p-5 flex justify-between">
                <Link href={route("estates.index")} className="inline-block">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:opacity-15 duration-[0.3s] bg-black w-[150px] fill-white p-2 rounded-xl cursor-pointer" height="35" width="35" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>
                </Link>
                <Link href={route("estate.edit", estateId)} className="inline-block">
                    <button className="hover:opacity-15 duration-[0.3s] bg-black w-[150px] text-white p-2 rounded-xl cursor-pointer">
                        EDIT
                    </button>
                </Link>
            </div>
            <div className="flex justify-center gap-24 max-xl:gap-14 max-lg:flex-col max-lg:items-center mt-20 mx-5">
                <div>
                    {images.length > 0 ? (
                        <div className="flex flex-col items-center max-w-[35em]">
                            <img
                                src={selectedImage}
                                alt="selected image"
                                className="object-cover w-35em"
                            />
                            <div className="flex justify-center gap-4 max-w-[27em] flex-wrap mt-8">
                                {images.map((img) => (
                                    <img
                                        className="object-cover w-24 max-sm:w-20 cursor-pointer opacity-65 hover:opacity-100"
                                        src={img.url}
                                        alt="estate image"
                                        onClick={handleSelectedImage}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center max-w-[35em]">
                            <img src={selectedImage} alt="selected image" />
                        </div>
                    )}
                </div>
                <div>
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight mb-1">
                        {estate.name}
                    </h2>
                    <p className="text-gray-500 font-medium mb-5">
                        {estate.location}
                    </p>
                    <div className="flex flex-col gap-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg ">
                        <p className="font-medium text-gray-500">
                            {estate.description
                                ? estate.description
                                : "No additional information."}
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Total price:{" "}
                            <span className="font-bold text-xl">
                                {estate.price} {estate.currency}
                            </span>
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Type of estate:{" "}
                            <span className="font-medium text-lg">
                                {estate.category.name}
                            </span>
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Room:
                            <span className="font-medium text-lg">
                                {estate.rooms ? estate.rooms : "N/A"}
                            </span>
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Beds:
                            <span className="font-medium text-lg">
                                {estate.beds ? estate.beds : "N/A"}
                            </span>
                        </p>
                        <div className="flex justify-between">
                            <p className="font-medium text-gray-800">
                                Arrive:
                                <span className="font-bold text-lg ml-4 max-sm:ml-2 bg-gray-600 text-white p-2 rounded-md">
                                    {estate.arrive_hour}
                                </span>
                            </p>
                            <p className="font-medium text-gray-800 ml-3">
                                Leave:
                                <span className="font-bold text-lg ml-4 max-sm:ml-2 bg-gray-600 text-white p-2 rounded-md">
                                    {estate.leave_hour}
                                </span>
                            </p>
                        </div>
                        <div>
                            {facilities.length > 0 && (
                                <h3 className="font-medium text-gray-800 mb-2">
                                    Facilities:
                                </h3>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {Object.entries(facilities).map(
                                    ([key, value], index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-200 font-bold cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                                        >
                                            {key}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}