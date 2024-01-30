import FilterCheckbox from "@/Components/FilterCheckbox";
import SearchBar from "@/Components/Home/SearchBar";
import ClientLayout from "@/Layouts/ClientLayout";
import { CurrencyContext } from "@/context/currencyContext";
import { Head, Link } from "@inertiajs/react";
import { useState, useContext } from "react";

export default function Results({ auth, estates, categories }) {
    const { formatPrice, currency } = useContext(CurrencyContext);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [records, setRecords] = useState(
        estates.slice(firstIndex, lastIndex)
    );
    const nPage = Math.ceil(estates.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const [categoriesList, setCategoriesList] = useState(
        categories.map((category) => ({ ...category, FacilityCheck: false }))
    );

    const [facilities, setFacilities] = useState([
        { name: "Wi-fi", FacilityCheck: false },
        { name: "Parking Place", FacilityCheck: false },
        { name: "Breakfast", FacilityCheck: false },
        { name: "Lunch", FacilityCheck: false },
        { name: "Dinner", FacilityCheck: false },
        { name: "Swimming Pool", FacilityCheck: false },
        { name: "Spa", FacilityCheck: false },
    ]);

    const [selectedOption, setSelectedOption] = useState("");

    const sortEstates = (typeOfSort) => {
        setSelectedOption(typeOfSort);

        if (typeOfSort === "ascending") {
            setRecords(records.sort((a, b) => a.price - b.price));
        } else {
            setRecords(records.sort((a, b) => b.price - a.price));
        }
    };

    const setFunc = (name) => {
        if (categoriesList.find((cat) => cat.name === name)) {
            const catIndex = categoriesList.findIndex(
                (cat) => cat.name === name
            );

            categoriesList[catIndex].FacilityCheck =
                !categoriesList[catIndex].FacilityCheck;

            setRecords(estates);
            setCategoriesList(categoriesList);
            filterResults("category");
        } else if (facilities.find((facility) => facility.name === name)) {
            const facilityIndex = facilities.findIndex(
                (facility) => facility.name === name
            );
            facilities[facilityIndex].FacilityCheck =
                !facilities[facilityIndex].FacilityCheck;

            setRecords(estates);
            setFacilities(facilities);
            filterResults("facility");
        }
    };

    const filterResults = (typeOfFilter) => {
        if (typeOfFilter === "category") {
            const filteredCategoriesList = categoriesList.filter(
                (cat) => cat.FacilityCheck === true
            );

            if (filteredCategoriesList.length === 0) return;

            let filteredEstates = [];

            filteredCategoriesList.map((cat) => {
                const filtered = estates.filter(
                    (record) => record.category_id === cat.id
                );
                if (filtered.length > 1) {
                    filtered.map((filter) => filteredEstates.push(filter));
                } else {
                    filteredEstates.push(filtered[0]);
                }
            });

            filteredEstates = filteredEstates.filter(
                (record) => record !== undefined
            );

            setRecords(filteredEstates);
        } else if (typeOfFilter === "facility") {
            const filteredFacilities = facilities.filter(
                (facility) => facility.FacilityCheck === true
            );

            console.log(filteredFacilities);

            if (filteredFacilities.length === 0) return;

            let filteredEstates = [];

            filteredFacilities.map((facility) => {
                console.log(records.map((record) => console.log(record)));
                // filteredEstates.push(
                //     estates.filter(
                //         (record) => record[facility.name.toLowerCase()]
                //     )[0]
                // );
            });

            filteredEstates = filteredEstates.filter(
                (record) => record !== undefined
            );

            setRecords(filteredEstates);
        }
    };

    const handleClick = async (id) => {
        try {
            await axios.post(route('estate.click', id));
        } catch (error) {
            console.error('Error incrementing estate click:', error);
        }
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    };

    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const pathName = window.location.href;
    const splitName = pathName.split("=");

    const place_id = splitName[1].split("&")[0];
    const checkInDate = decodeURIComponent(splitName[2].split("&")[0]).split(
        "T"
    )[0];
    const checkOutDate = decodeURIComponent(splitName[3]).split("T")[0];
    const newSearchValues = {
        place_id,
        checkInDate,
        checkOutDate,
    };

    return (
        <>
            <Head title="Results" />

            <ClientLayout auth={auth}>
                <div className="w-[90%] sm:m-auto mt-8">
                    <Link href="/" className="sm:inline-block hidden">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:opacity-15 duration-[0.3s] bg-black w-[150px] fill-white p-2 rounded-xl cursor-pointer"
                                height="35"
                                width="35"
                                viewBox="0 0 448 512"
                            >
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>
                    </Link>

                    <SearchBar
                        newSearchValues={newSearchValues}
                        className={"top-0 h-20 mt-[10em] 2xl:ml-[20em] xl:ml-[15em] ml-[4em]"}
                    />

                    <div className="flex flex-col sm:flex-row justify-between xl:mt-0 mt-[15em]">
                        <div className="flex flex-col sm:w-[25%] w-[50%] sm:ml-0 ml-[5em] gap-3 mt-[5em]">

                            <div className="space-y-2">
                                <h2 className="font-medium text-xl pb-1 sm:w-[150px] w-[150px]">
                                    Sort by Price
                                </h2>
                                <select
                                    className="rounded-xl"
                                    value={selectedOption}
                                    onChange={(event) =>
                                        sortEstates(event.target.value)
                                    }
                                >
                                    <option value="">
                                        Choose a way of sorting
                                    </option>
                                    <option value="ascending">Lower to Higher</option>
                                    <option value="descending">
                                        Higher to Lower
                                    </option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <h2 className="font-medium text-xl pb-1">
                                    Category
                                </h2>
                                {categoriesList.map((category) => (
                                    <FilterCheckbox
                                        key={category.name}
                                        label={category.name}
                                        FacilityCheck={category.FacilityCheck}
                                        setFunc={setFunc}
                                    />
                                ))}
                            </div>

                        </div>
                        {estates.length > 0 ? (
                            <div className="flex justify-center mt-[5em] mr-auto">
                                <div className="flex flex-col gap-[2.5em] sm:w-[900px] w-[420px] items-center sm:items-stretch">
                                    {records.length > 0 ? (
                                        records.map((estate, index) => (
                                            <Link
                                                key={index}
                                                href={route('estate.details', estate.id)}
                                                className="inline-block"
                                            >
                                                <div className="flex sm:flex-row flex-col w-[350px] sm:w-full shadow-xl hover:shadow-2xl m-2 rounded-xl">
                                                    {estate.images.length > 0 ? (
                                                        <img
                                                            src={estate.images[0].url}
                                                            alt=""
                                                            className="sm:w-[250px] sm:h-[250px] h-[230px] sm:rounded-l-xl sm:rounded-tr-none rounded-t-xl"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
                                                            alt="selected image"
                                                            className="sm:w-[250px] sm:h-[250px] h-[230px] sm:rounded-l-xl sm:rounded-tr-none rounded-t-xl"
                                                        />
                                                    )}
                                                    <div className="py-3 px-5 flex flex-col w-full">
                                                        <h1 className="font-bold text-[1.5em]">
                                                            {estate.name}
                                                        </h1>
                                                        <div className="flex gap-[6em] mt-3">
                                                            <div className="flex gap-2 items-center">
                                                                <div className="flex">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        height="20"
                                                                        width="20"
                                                                        viewBox="0 0 384 512"
                                                                    >
                                                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                                                    </svg>
                                                                    <h3>
                                                                        {estate.location}
                                                                    </h3>
                                                                </div>
                                                            </div>

                                                            <div className="flex gap-2 items-center">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height="16"
                                                                    width="20"
                                                                    viewBox="0 0 640 512"
                                                                >
                                                                    <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                                                                </svg>
                                                                <h3>
                                                                    {estate.beds
                                                                        ? estate.beds
                                                                        : "N/A"}
                                                                </h3>
                                                            </div>

                                                        </div>

                                                        <p className="text-[20px] mt-5 line-clamp-3 max-w-[50em]">
                                                            {estate.description}
                                                        </p>
                                                        <div className="w-full mt-auto ml-auto flex justify-end">
                                                            <h2 className="text-[18px] sm:mt-0 mt-4">{formatPrice(
                                                            estate.price,
                                                            estate.currency,
                                                            currency)} 
                                <span className="font-bold">{currency}</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="font-bold text-2xl text-gray-900 w-[700px] flex justify-center">
                                            No matching results
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col mt-[5em] gap-[2.5em] mr-[23em] items-center w-full m-auto font-bold">
                                NO RECORDS FOUND
                            </div>
                        )}
                    </div>


                    {/* Pagination */}
                    <div
                        className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 p-4 mb-auto my-[3em]"
                        aria-label="Table navigation"
                    >
                        {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                            </span> */}
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    onClick={prevPage}
                                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            {numbers.map((n, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        onClick={() => changeCurrentPage(n)}
                                        className={`${currentPage === n ? "bg-gray-700" : ""
                                            } flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                    >
                                        {n}
                                    </a>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="#"
                                    onClick={nextPage}
                                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </ClientLayout>
        </>
    );
}
