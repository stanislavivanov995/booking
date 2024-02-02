import React from 'react';

export default function ReservationsTable({totalReservations}) {
    return (
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Place</th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Location</th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Check In</th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Check Out</th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Arrive Hour</th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Leave Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                            {totalReservations.map((record, index) => (
                                <tr key={index} className="border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.estate.name}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.estate.location}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.check_in}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.check_out}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.estate.arrive_hour}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.estate.leave_hour}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table> 

                    </div>
        </div>
    );
}
