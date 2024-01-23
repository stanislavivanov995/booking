import Heading from "@/Components/Home/Heading";
import NavBar from "@/Components/Home/Navbar";
import SearchBar from "@/Components/Home/SearchBar";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";


export default function Results({ auth, estates, categories }) {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = estates.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(estates.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

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
    const splitName = pathName.split("=")

    const place_id = splitName[1].split('&')[0];
    const checkInDate = decodeURIComponent(splitName[2].split('&')[0]).split("T")[0]
    const checkOutDate = decodeURIComponent(splitName[3]).split("T")[0]
    const newSearchValues = {
        place_id,
        checkInDate,
        checkOutDate
    }

    return (
        <>
            <Head title="Results" />

            <Heading auth={auth} />
            <NavBar />

            <div className="w-[90%] m-auto mt-8">
                <div className="flex w-full gap-[10em]">
                    <Link href="/" className="inline-block">
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
                        className={"top-0 h-20 mt-[10em] right-[20em]"}
                    />
                </div>

                {estates.length > 0 ? (
                    <div className="flex flex-col mt-[4em] gap-[2.5em] items-center justify-middle">
                        {records.map((estate, index) => (
                            <Link key={index} href="#" className="inline-block">
                                <div className="flex shadow-xl hover:shadow-2xl m-2 rounded-xl">
                                    {estate.images.length > 0 ? (
                                        <img
                                            src={estate.images[0].url}
                                            alt=""
                                            className="w-[230px] h-[230px] rounded-s-xl"
                                        />
                                    ) : (
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
                                            alt="selected image"
                                            className="w-[230px] h-[230px] rounded-s-xl"
                                        />
                                    )}
                                    <div className="py-3 px-5">
                                        <h1 className="font-bold text-[1.5em]">
                                            {estate.name}
                                        </h1>
                                        <div className="flex gap-[6em] mt-3">
                                            <div className="flex gap-2 items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="20"
                                                    width="20"
                                                    viewBox="0 0 384 512"
                                                >
                                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                                </svg>
                                                <h3>{estate.location}</h3>
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
                                        <p className="text-[20px] mt-5 line-clamp-4 max-w-[50em]">
                                            {estate.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col mt-[2em] gap-[2.5em] items-center justify-middle">
                        No records found
                    </div>
                )}
                {/* Pagination */}
                <div
                    className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 p-4 my-[3em]"
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
        </>
    );
}
