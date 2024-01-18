export default function Table({ items: records }) {
    console.log(records);
    const defaultImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";
    return (
        <section className="bg-gray-50 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
                    <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">
                                    All Products:{" "}
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </span>
                                <span> {records.length}</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
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
                                    <th scope="col" className="px-4 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Sales
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
                                {records.map((record) => (
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
                                                        ? record.images[0].url
                                                        : defaultImage
                                                }
                                                alt="iMac Front Image"
                                                className="w-16 h-16 mr-3 rounded-full"
                                            />
                                            <p>{record.name}</p>
                                        </th>
                                        <td className="px-4 py-2">
                                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded"></span>
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                                95
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="ml-1 text-gray-500">
                                                    5.0
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5 mr-2 text-gray-400"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                                </svg>
                                                3000
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            {record.price} {record.currency}
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5 mr-2 text-gray-400"
                                                aria-hidden="true"
                                            >
                                                <circle cx="12" cy="12" r="1" />
                                                <circle cx="12" cy="19" r="1" />
                                                <circle cx="12" cy="5" r="1" />
                                            </svg>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav
                        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                        aria-label="Table navigation"
                    >
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark"
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
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    ...
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    100
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
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
        </section>
    );
}
