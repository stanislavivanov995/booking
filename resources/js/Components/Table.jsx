import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Table({ items: records, query }) {
    // Confirm Deletion
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState();

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const estates = records.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(records.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage <= 1) {
            return;
        }
        if (currentPage !== firstIndex) {
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

    const handleDeleteConfirmation = (record) => {
        setRecordToDelete(record);
        setIsConfirmDeleteOpen(true);
    };
    const handleDelete = async () => {
        try {
            await axios.get(route('estate.delete', recordToDelete.id));
            toast.success('Successfully Deleted!',{
                position: "top-right",
                autoClose: 5000});
            setIsConfirmDeleteOpen(false);
            setRecordToDelete(undefined);
            window.location.reload(); // Refresh the page
        } catch (error) {
            console.error('Error deleting record:', error);
            toast.error('Error deleting record. Please try again.');
        }
    };

    const defaultImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";
    return (
        <section className="bg-gray-50 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
                    <div
                        className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">
                                    All Estates:{" "}
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </span>
                                <span> {records.length}</span>
                            </h5>
                        </div>
                        <div
                            className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            {/* Buttons */}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Category
                                </th>
                                {/* <th scope="col" className="px-4 py-3">
                                        Status
                                    </th> */}
                                <th scope="col" className="px-4 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {estates
                                .filter((estate) =>
                                    estate.name
                                        .toLowerCase()
                                        .includes(query.toLowerCase())
                                )
                                .map((record) => (
                                    <tr
                                        key={record.id}
                                        className="border-b hover:bg-gray-100"
                                    >
                                        <th
                                            scope="row"
                                            className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            <img
                                                src={
                                                    record.images.length > 0
                                                        ? record.images[0]
                                                            .url
                                                        : defaultImage
                                                }
                                                alt="iMac Front Image"
                                                className="object-cover w-16 h-16 mr-3 rounded-full"
                                            />
                                            <p>{record.name}</p>
                                        </th>
                                        <td className="px-4 py-2">
                                                <span
                                                    className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded">
                                                    {record.category.name}
                                                </span>
                                        </td>
                                        {/* <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                                95
                                            </div>
                                        </td> */}
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <span className="ml-1 text-gray-500">
                                                        5.0
                                                    </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-[18px] h-[18px] text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 17 21"
                                                >
                                                    <g
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.1"
                                                    >
                                                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                        <path
                                                            d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
                                                    </g>
                                                </svg>
                                                {record.location}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            {record.price} {record.currency}
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center space-x-4">
                                                {/* Show */}
                                                <a
                                                    href={route(
                                                        "estate.show",
                                                        record.id
                                                    )}
                                                >
                                                    <div
                                                        className="tooltip"
                                                        title="Show more details"
                                                    >
                                                        <svg
                                                            className="w-[18px] h-[18px] text-gray-800  cursor-pointer"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 14"
                                                        >
                                                            <g
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.1"
                                                            >
                                                                <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                                <path
                                                                    d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </a>
                                                {/* Show */}

                                                {/* Edit */}
                                                <a
                                                    href={route(
                                                        "estate.edit",
                                                        record.id
                                                    )}
                                                >
                                                    <div
                                                        className="tooltip"
                                                        title="Edit Estate"
                                                    >
                                                        <svg
                                                            className="w-[18px] h-[18px] text-gray-800  cursor-pointer"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 21 21"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.1"
                                                                d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                                {/* Edit */}

                                                {/* Delete */}
                                                <button type={'button'}
                                                        onClick={() => handleDeleteConfirmation(record)}
                                                >
                                                    <div
                                                        className="tooltip"
                                                        title="Delete Estate"
                                                    >
                                                        <svg
                                                            className="w-[18px] h-[18px] text-gray-800 "
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 20"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.1"
                                                                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </button>
                                                {/* Delete */}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav
                        className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 p-4"
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
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    </nav>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <dialog autoFocus
                    className={'fixed inset-1 w-full rounded-lg border border-rose-400 bg-white px-5 py-3 shadow-md md:w-2/3 lg:w-1/2'}
                    open={isConfirmDeleteOpen}>

                <h3 className={'mb-2 border-b pb-1 text-lg font-bold'}>Are You Sure You Want to Delete it?</h3>

                <p>You are trying to delete: <span className={'italic'}>"{recordToDelete?.name}"</span>
                </p>
                <p>Please confirm your decision. </p>

                <div
                    className="mt-3 flex flex-col gap-2 border-t border-slate-400 pt-3 md:flex-row-reverse md:gap-4">
                    <button type={'button'} onClick={handleDelete}
                            className={'w-full rounded border border-red-500 bg-rose-200 px-2 py-2.5 text-red-950 hover:bg-rose-300 md:w-fit md:py-1'}>
                        DELETE
                    </button>
                    <button type={'button'} autoFocus onClick={() => setIsConfirmDeleteOpen(false)}
                            className={'w-full rounded border border-slate-500 px-2 py-2.5 md:w-fit md:py-1'}>
                        CANCEL
                    </button>
                </div>

            </dialog>

        </section>
    );
}
