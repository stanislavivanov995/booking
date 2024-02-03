import React from "react";

export default function Cards({
    totalEstates,
    totalReservations,
    hostedReservations,
}) {
    return (
        <div className="flex flex-wrap justify-center items-center py-5 gap-10 text-white">
            <div className="flex flex-col bg-blue-400 rounded-lg w-[20em] h-[9em] py-6 px-8 shadow-lg shadow-slate-400">
                <div className="font-bold text-xl">Estates</div>
                <div className="flex justify-between items-center">
                    <svg
                        className="w-12 h-12 ml-[-0.3em]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
                        />
                    </svg>
                    <span className="font-bold clear-start pr-5 text-[40px]">
                        {totalEstates.length}
                    </span>
                </div>
            </div>
            <div className="flex flex-col bg-rose-400 rounded-lg shadow-lg shadow-slate-400 w-[20em] h-[9em] py-6 px-8">
                <div className="font-bold text-xl">My Reservations</div>
                <div className="flex justify-between items-center">
                    <svg
                        className="w-12 h-12"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z"
                        />
                    </svg>
                    <span className="font-bold clear-start pr-5 text-[40px]">
                        {totalReservations.length}
                    </span>
                </div>
            </div>
            <div className="flex flex-col bg-orange-400 rounded-lg shadow-lg shadow-slate-400 w-[20em] h-[9em] py-6 px-8">
                <div className="font-bold text-xl">Hosted Reservations</div>
                <div className="flex justify-between items-center">
                    <svg
                        className="w-12 h-12"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z"
                        />
                    </svg>
                    <span className="font-bold clear-start pr-5 text-[40px]">
                        {hostedReservations.length}
                    </span>
                </div>
            </div>
        </div>
    );
}
//<div className="mt-2 flex flex-wrap justify-center items-center gap-4">
//     <div className="flex h-20 w-40 flex-col bg-blue-400 text-white items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
//         <div className="flex flex-row items-center justify-center">
//

//             <span className="font-bold"> {totalEstates.length} </span>
//         </div>

//         <div className="mt-2 text-sm">Estates</div>
//     </div>

//     <div className="flex h-20 w-40 flex-col bg-red-400 text-white items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
//         <div className="flex flex-row items-center justify-center">
//             <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//             >
//                 <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z"
//                 />
//             </svg>
//             <span className="font-bold">
//                 {" "}
//                 {totalReservations.length}{" "}
//             </span>
//         </div>

//         <div className="mt-2 text-sm">My Reservations</div>
//     </div>

//     <div className="flex h-20 w-40 bg-yellow-500 text-white flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
//         <div className="flex flex-row items-center justify-center">
//             <svg
//                 className="w-6 h-6 "
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//             >
//                 <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
//                 />
//                 <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
//                 />
//             </svg>

//             <span className="font-bold">
//                 {" "}
//                 {hostedReservations.length}{" "}
//             </span>
//         </div>

//         <div className="mt-2 text-sm">Hosted Reservations </div>
//     </div>
// </div>
