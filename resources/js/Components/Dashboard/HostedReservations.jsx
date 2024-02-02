import React from "react";

export default function HostedReservations({ hostedReservations }) {
    return (
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-slate-800/50 text-white">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Place
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Location
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Arrive Hour
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Leave Hour
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {hostedReservations.map((record, index) => (
                            <tr
                                key={index}
                                className={
                                    hostedReservations.length - 1 === index
                                        ? ""
                                        : "border-b border-white"
                                }
                            >
                                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                    {record.name}
                                </td>
                                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                    {record.location}
                                </td>
                                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                    {record.arrive_hour}
                                </td>
                                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                    {record.leave_hour}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
