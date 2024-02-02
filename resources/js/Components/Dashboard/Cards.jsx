import React from 'react';

export default function Cards({totalEstates, totalReservations, hostedReservations}) {
    return (
        <div className="mt-2 flex flex-wrap justify-center items-center gap-4">

    <p href="#"
        className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
        <div className="flex flex-row items-center justify-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
        </svg>

            <span className="font-bold text-gray-600"> {totalEstates.length} </span>
        </div>

        <div className="mt-2 text-sm text-gray-400">Estates</div>
    </p>

    <p href="#"
        className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
        <div className="flex flex-row items-center justify-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z"/>
        </svg>
            <span className="font-bold text-gray-600"> {totalReservations.length} </span>
        </div>

        <div className="mt-2 text-sm text-gray-400">My Reservations</div>
    </p>

    <p href="#"
        className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
        <div className="flex flex-row items-center justify-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"/>
        </svg>

            <span className="font-bold text-gray-600"> {hostedReservations.length} </span>
        </div>

        <div className="mt-2 text-sm text-gray-400">Hosted Reservations </div>
    </p>
</div>
    );
}
