import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Edit({ auth, estate }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Estate: {estate.id}</h2>}
    >
      <Head title={'Estate:' + estate.name} />

      {/* <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            
          </div>
        </div>
      </div> */}
    </AuthenticatedLayout>
  );
}
