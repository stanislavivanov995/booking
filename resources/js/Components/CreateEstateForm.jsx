import React, { useState, useEffect } from "react";

import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "./InputError";
import TextArea from "./TextArea";
import OptionsMenu from "./OptionsMenu";
import CreateFormSubmitButton from "./CreateFormSubmitButton";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";
import Checkbox from "./Checkbox";
import AutoComplete from "react-google-autocomplete"

export default function CreateEstateForm(categories) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: "",
        description: "",
        images: [],
        place_id: "",
        category_id: 1,
        arrive_hour: "10:00",
        leave_hour: "12:00",
        price: "",
        currency: "BGN",
        rooms: "",
        beds: "",
        wifi: 0,
        parking: 0,
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        swimming_pool: 0,
        spa: 0,
    });

    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileStatus, setFileStatus] = useState(
        "Click to upload or drag and drop"
    );

    const [placeId, setPlaceId] = useState("");

    const [selectedCategory, setSelectedCategory] = useState(1);

    const [checkInTime, setCheckInTime] = useState("10:00");
    const [checkOutTime, setCheckOutTime] = useState("12:00");
    const [selectedCurrency, setSelectedCurrency] = useState("BGN");

    useEffect(() => {
        if (selectedCategory) {
            setData("category_id", selectedCategory.id);
        } else {
            setData("category_id", 1);
        }
    }, [selectedCategory]);

    useEffect(() => {
        setData("arrive_hour", checkInTime);
    }, [checkInTime]);

    useEffect(() => {
        setData("leave_hour", checkOutTime);
    }, [checkOutTime]);

    const handleCategorySelect = (selectedItem) => {
        setSelectedCategory(selectedItem);
        setData("category_id", selectedItem.id);
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + selectedFiles.length > 15) {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false);
            }, 3000);
            return;
        }
        setSelectedFiles([...selectedFiles, ...files]);
        setData("images", [...selectedFiles, ...files]);
        setFileStatus("Files selected");
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        if (
            selectedFiles.length === 15 ||
            Array.from(e.dataTransfer.files).length + selectedFiles.length > 15
        ) {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false);
            }, 3000);
            return;
        }
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles([...selectedFiles, ...files]);
        setData("images", [...selectedFiles, ...files]);
        setFileStatus("Files dropped");
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setFileStatus("Drop here");
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
        setData("images", updatedFiles);
        setFileStatus("File removed");
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route("estates.store"));
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Create Estate
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Fields with * are required.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>

                    {/* Location */}
                    <div className="mt-3">
                        <InputLabel htmlFor="location" value="Location*" />

                        <AutoComplete
                            apiKey="AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo"
                            className="mt-1 block w-full border border-gray-300 rounded-lg"
                            onPlaceSelected={(place) => {
                                setData("place_id", place.place_id)
                            }}
                        />

                        <InputError
                            className="mt-2"
                            message={errors.place_id}
                        />
                    </div>
                    {/* Location */}

                    {/* Name */}
                    <InputLabel htmlFor="name" value="Name*" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        name="name"
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.name} />
                    {/* Name */}

                    {/* Check in / Check out */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Check In */}
                        <div
                            style={{ flex: 1, marginRight: "10px" }}
                            className="mt-3"
                        >
                            <InputLabel htmlFor="checkIn" value="Check In" />
                            <TimePicker
                                id="checkIn"
                                value={checkInTime}
                                className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                onChange={(time) => setCheckInTime(time)}
                            />
                            <InputError
                                className="mt-2"
                                message={errors.checkIn}
                            />
                        </div>
                        {/* Check In */}

                        {/* Check Out */}
                        <div
                            style={{ flex: 1, marginLeft: "10px" }}
                            className="mt-3"
                        >
                            <InputLabel htmlFor="checkOut" value="Check Out" />
                            <TimePicker
                                id="checkOut"
                                value={checkOutTime}
                                className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                onChange={(time) => setCheckOutTime(time)}
                            />
                            <InputError
                                className="mt-2"
                                message={errors.checkOut}
                            />
                        </div>
                        {/* Check Out */}
                    </div>
                    {/* Check in / Check out */}

                    {/*Price*/}
                    <div className="sm:col-span-2">
                        <InputLabel htmlFor="price" value="Price*" />
                        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg focus:bg-red-500">
                            <div className="relative w-full p-2">
                                <span className="absolute top-2 left-2 px-2.5 py-[0.58em] font-bold text-gray-900 text-md">
                                    {selectedCurrency}
                                </span>
                                <TextInput
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 pl-12 outline-none text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full block p-[0.8em]"
                                    placeholder="0.00"
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />
                            </div>
                            <div className="m-2 mr-[1em]">
                                <select
                                    as="select"
                                    name="currency"
                                    id="currency"
                                    value={selectedCurrency}
                                    className="rounded-lg bg-transparent h-10"
                                    onChange={(e) => {
                                        setSelectedCurrency(e.target.value);
                                        setData("currency", e.target.value);
                                    }}
                                >
                                    <option
                                        value="BGN"
                                        className={
                                            selectedCurrency === "BGN"
                                                ? "bg-indigo-300"
                                                : "bg-gray-200"
                                        }
                                    >
                                        BGN
                                    </option>
                                    <option
                                        value="EUR"
                                        className={
                                            selectedCurrency === "EUR"
                                                ? "bg-indigo-300"
                                                : "bg-gray-200"
                                        }
                                    >
                                        EUR
                                    </option>
                                    <option
                                        value="USD"
                                        className={
                                            selectedCurrency === "USD"
                                                ? "bg-indigo-300"
                                                : "bg-gray-200"
                                        }
                                    >
                                        USD
                                    </option>
                                </select>
                            </div>
                        </div>
                        <InputError className="mt-2" message={errors.price} />
                    </div>
                    {/*Price*/}

                    {/* Category */}
                    <div className="mt-3">
                        <InputLabel htmlFor="category" value="Category" />

                        <OptionsMenu
                            options={categories.categories}
                            isFocused={false}
                            onSelect={handleCategorySelect}
                        />
                    </div>
                    {/* Category */}

                    {/* Rooms and Beds */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{ flex: 1, marginRight: "10px" }}
                            className="mt-3"
                        >
                            <InputLabel htmlFor="rooms" value="Rooms" />

                            <TextInput
                                id="rooms"
                                className="mt-1 block w-full"
                                name="rooms"
                                onChange={(e) =>
                                    setData("rooms", e.target.value)
                                }
                            />
                        </div>

                        <div
                            style={{ flex: 1, marginRight: "10px" }}
                            className="mt-3"
                        >
                            <InputLabel htmlFor="beds" value="Beds" />

                            <TextInput
                                id="beds"
                                className="mt-1 block w-full"
                                name="beds"
                                onChange={(e) =>
                                    setData("beds", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    {/* Rooms and Beds */}

                    {/* Description */}
                    <InputLabel
                        className="mt-4"
                        htmlFor="description"
                        value="Description"
                    />

                    <TextArea
                        className="mt-1 block w-full"
                        name="description"
                        rows="4"
                        placeholder="Enter text here..."
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {/* Description */}

                    {/* Facilities */}
                    <InputLabel
                        className="mt-4 mb-3"
                        htmlFor="facilities"
                        value="Facilities"
                    />

                    <div className="flex justify-between space-x-7">
                        <Checkbox
                            label="Wi-fi"
                            onChange={(e) =>
                                setData("wifi", e.target.checked ? 1 : 0)
                            }
                        />
                        <Checkbox
                            label="Parking Place"
                            onChange={(e) =>
                                setData("parking", e.target.checked ? 1 : 0)
                            }
                        />
                        <Checkbox
                            label="Breakfast"
                            onChange={(e) =>
                                setData("breakfast", e.target.checked ? 1 : 0)
                            }
                        />
                        <Checkbox
                            label="Lunch"
                            onChange={(e) =>
                                setData("lunch", e.target.checked ? 1 : 0)
                            }
                        />
                        <Checkbox
                            label="Dinner"
                            onChange={(e) =>
                                setData("dinner", e.target.checked ? 1 : 0)
                            }
                        />
                        <Checkbox
                            label="Swimming Pool"
                            onChange={(e) =>
                                setData(
                                    "swimming_pool",
                                    e.target.checked ? 1 : 0
                                )
                            }
                        />
                        <Checkbox
                            label="Spa"
                            onChange={(e) =>
                                setData("spa", e.target.checked ? 1 : 0)
                            }
                        />
                    </div>
                    {/* Facilities */}

                    {/* Images */}
                    {showTooltip && (
                        <div
                            id="tooltip-click"
                            role="tooltip"
                            className="text-center z-10 mt-5 bg-red-500 block px-3 py-1.5 text-sm font-medium text-white rounded-lg shadow-sm"
                        >
                            Maximum images can be 15!
                            <div
                                className="tooltip-arrow"
                                data-popper-arrow
                            ></div>
                        </div>
                    )}

                    <div className="w-full mt-7">
                        <InputLabel
                            htmlFor="images"
                            className="flex flex-col items-center max-md:max-w-[18em] justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover-bg-gray-100"
                            onDrop={handleFileDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="flex flex-col items-center justify-center h-64">
                                {selectedFiles.length > 0 ? (
                                    <div className="flex gap-5 max-w-[30em] flex-wrap items-center justify-center">
                                        {selectedFiles.map((file, index) => (
                                            <div
                                                key={index}
                                                className="relative"
                                            >
                                                <img
                                                    src={URL.createObjectURL(
                                                        file
                                                    )}
                                                    alt={`Image ${index}`}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleRemoveFile(index);
                                                    }}
                                                    className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover-bg-red-600 cursor-pointer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        ></svg>
                                        <p className="mb-2 text-sm text-gray-500">
                                            <span className="font-semibold">
                                                {fileStatus}
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500 mx-3">
                                            SVG, PNG, JPG, or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </>
                                )}
                            </div>
                            <TextInput
                                type="file"
                                name="images"
                                id="images"
                                className="hidden"
                                multiple
                                onChange={handleFileInputChange}
                                disabled={selectedFiles.length === 15}
                            />
                        </InputLabel>
                    </div>
                    {/* Images */}

                    <div className="flex items-center mt-6 gap-4">
                        <CreateFormSubmitButton disabled={processing}>
                            Create
                        </CreateFormSubmitButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <div
                                className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                                role="alert"
                            >
                                <p className="font-bold">
                                    Esatte Created Successfully!
                                </p>
                            </div>
                        </Transition>
                    </div>
                </div>
            </form>
        </section>
    );
}
