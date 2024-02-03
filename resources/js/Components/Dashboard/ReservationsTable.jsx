import React from "react";

export default function ReservationsTable({ totalReservations }) {

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
      }

    return (
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
                <th scope="col" class="px-6 py-3">
                    Check In
                </th>
                <th scope="col" class="px-6 py-3">
                    Check Out
                </th>
                <th scope="col" class="px-6 py-3">
                    Arrive Hour
                </th>
                <th scope="col" class="px-6 py-3">
                    Leave Hour
                </th>
            </tr>
        </thead>
        <tbody>
        {totalReservations.map((record, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{record.estate.name}</td>
                <td class="px-6 py-4">{record.estate.location}</td>
                <td class="px-6 py-4">{formatDate(record.check_in)}</td>
                <td class="px-6 py-4">{formatDate(record.check_out)}</td>
                <td class="px-6 py-4">{record.estate.arrive_hour}</td>
                <td class="px-6 py-4">{record.estate.leave_hour}</td>
            </tr>
        ))}
        </tbody>
    </table>
</div>

        </div>
    );
}
