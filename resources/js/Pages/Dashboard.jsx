import Cards from "@/Components/Dashboard/Cards";
import HostedReservations from "@/Components/Dashboard/HostedReservations";
import ReservationsTable from "@/Components/Dashboard/ReservationsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    totalEstates,
    totalReservations,
    hostedReservations,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="flex flex-col justify-center items-center gap-14 max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-transparent sm:rounded-lg">
                        <Cards
                            totalEstates={totalEstates}
                            totalReservations={totalReservations}
                            hostedReservations={hostedReservations}
                        />
                    </div>
                    <div className="w-2/3 p-5 overflow-hidden bg-slate-200 shadow-lg shadow-slate-400 sm:rounded-lg">
                        <div className="flex flex-col items-center py-5 px-10">
                            <h1 className="text-xl font-bold">
                                My Reservatons
                            </h1>
                            {totalReservations.length > 0 ? (
                                <ReservationsTable
                                    totalReservations={totalReservations}
                                />
                            ) : (
                                <div className="p-4 pt-5 text-center text-gray-500">
                                    You don't have any records yet.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full bg-indigo-400 overflow-hidden sm:rounded-lg">
                        <div className="flex justify-between items-end">
                            <div className="w-full pt-7 pl-10">
                                <h1 className="text-xl font-bold pb-3">
                                    Hosted Reservatons
                                </h1>
                                {hostedReservations.length > 0 ? (
                                    <HostedReservations
                                        hostedReservations={hostedReservations}
                                    />
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        You don't have any records yet.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

{
    /* <div className="py-12">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <Cards
                totalEstates={totalEstates}
                totalReservations={totalReservations}
                hostedReservations={hostedReservations}
            />
        </div>
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex justify-between items-end">
                <div className="w-full md:w-1/2 pt-5 pl-5">
                    <h1>My Reservatons</h1>
                    {totalReservations.length > 0 ? (
                        <ReservationsTable
                            totalReservations={totalReservations}
                        />
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            You don't have any records yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex justify-between items-end">
                <div className="w-full md:w-1/2 pt-5 pl-5">
                    <h1>Hosted Reservatons</h1>
                    {hostedReservations.length > 0 ? (
                        <HostedReservations
                            hostedReservations={hostedReservations}
                        />
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            You don't have any records yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
</div>; */
}
