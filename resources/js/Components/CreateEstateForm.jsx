import React, { useState, useEffect } from "react";

import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "./InputError";
import TextArea from "./TextArea";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import OptionsMenu from "./OptionsMenu";
import CreateFormSubmitButton from "./CreateFormSubmitButton";
import TimePicker from 'react-time-picker';
import 'react-clock/dist/Clock.css';
import 'react-time-picker/dist/TimePicker.css';

export default function CreateEstateForm(categories) {
    const { setData, post, errors, processing, recentlySuccessful } = useForm({
        name: "",
        description: "",
        images: [],
        place_id: "",
        category_id: 1,
        arrive_hour: "10:00",
        leave_hour: "12:00",
        price: "",
        currency: ""
    });

    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileStatus, setFileStatus] = useState(
        "Click to upload or drag and drop"
    );

    const [placeId, setPlaceId] = useState("");

    const [selectedCategory, setSelectedCategory] = useState(1);

    const [checkInTime, setCheckInTime] = useState('10:00'); 
    const [checkOutTime, setCheckOutTime] = useState('12:00');


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
        post(route("estates.store"));
    };


    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Create Estate
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Show your perfect place
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    {/* Name */}
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        name="name"
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.name} />
                    {/* Name */}

                    {/* Location */}
                    <div className="mt-3">
                        <InputLabel htmlFor="location" value="Location" />

                        <GooglePlacesAutocomplete
                            apiKey="AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo"
                            selectProps={{
                                placeId,
                                onChange: (e) => 
                                    setData("place_id", e.value.place_id)
                                }}
                        />
                        <InputError className="mt-2" message={errors.place_id} />
                    </div>
                    {/* Location */}

                    
                    {/* Check in / Check out */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Check In */}
                        <div style={{ flex: 1, marginRight: '10px' }} className="mt-3">
                            <InputLabel htmlFor="checkIn" value="Check In" />
                            <TimePicker
                                id="checkIn"
                                value={checkInTime}
                                className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(time) => setCheckInTime(time)}
                            />
                            <InputError className="mt-2" message={errors.checkIn} />
                        </div>
                        {/* Check In */}

                        {/* Check Out */}
                        <div style={{ flex: 1, marginLeft: '10px' }} className="mt-3">
                            <InputLabel htmlFor="checkOut" value="Check Out" />
                            <TimePicker
                                id="checkOut"
                                value={checkOutTime}
                                className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(time) => setCheckOutTime(time)}
                            />
                            <InputError className="mt-2" message={errors.checkOut} />
                        </div>
                        {/* Check Out */}
                    </div>
                    {/* Check in / Check out */}

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

                    {/*Price and Currency */}
                    <div className="mt-3">

                    </div>
                    {/* Price and Currency */}

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
                            className="flex flex-col items-center max-md:max-w-[18em] justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover-bg-gray-100 dark:border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600"
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
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        ></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                {fileStatus}
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mx-3">
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
