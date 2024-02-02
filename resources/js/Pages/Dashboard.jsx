import Cards from '@/Components/Dashboard/Cards';
import HostedReservations from '@/Components/Dashboard/HostedReservations';
import ReservationsTable from '@/Components/Dashboard/ReservationsTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, totalEstates, totalReservations, hostedReservations }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Cards */}
                        <Cards 
                            totalEstates={totalEstates} 
                            totalReservations={totalReservations}
                            hostedReservations={hostedReservations}
                        />
                        {/* Cards */}
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between items-end">
                            <div className="w-full md:w-1/2 pt-5 pl-5">
                        <h1>My Reservatons</h1>
                        {/* Reservations Table */}
                        {totalReservations.length > 0 ?
                        <ReservationsTable
                            totalReservations={totalReservations}
                        /> : 
                        <div className="p-4 text-center text-gray-500">
                            You don't have any records yet.
                        </div>
                        }
                            </div>
                        </div>
                        {/* Reservations Table */}
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between items-end">
                            <div className="w-full md:w-1/2 pt-5 pl-5">
                        <h1>Hosted Reservatons</h1>
                        {/*Hosted Reservations Table */}
                        {hostedReservations.length > 0 ?
                        <HostedReservations
                        hostedReservations={hostedReservations}
                        /> : 
                        <div className="p-4 text-center text-gray-500">
                            You don't have any records yet.
                        </div>
                        }
                            </div>
                        </div>
                        {/*Hosted Reservations Table */}
                    </div>
                {/* </div>
            </div> */}
        </AuthenticatedLayout>
    );
}


