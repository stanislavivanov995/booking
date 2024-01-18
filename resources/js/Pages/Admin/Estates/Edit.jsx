import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import EditEstateForm from "@/Components/EditEstateForm.jsx";


export default function Edit({auth, estate}) {
    console.log(estate)
    console.log(estate.name)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{estate.name}</h2>}
        >
            <Head title={'Estate:' + estate.name}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <EditEstateForm estate={estate}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
