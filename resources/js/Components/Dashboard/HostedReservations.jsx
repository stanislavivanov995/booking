import React from 'react';

export default function HostedReservations({hostedReservations}) {
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
                            {hostedReservations.map((record, index) => (
                                <tr key={index} className="border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.name}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.location}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{hostedReservations[0].reservations[0].check_in}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{hostedReservations[0].reservations[0].check_out}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.arrive_hour}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.leave_hour}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table> 

                    </div>
        </div>
    );
}
