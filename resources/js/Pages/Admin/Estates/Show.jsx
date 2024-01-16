import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth, estate, facilities, images }) {
    const mockEstate = {
        name: "A simple name",
        description:
            "A description which fits some of the core things about the apartment",
        price: "4500",
        currency: "BGN",
        category: "Apartment",
        checkIn: "10:00AM",
        checkOut: "12:00PM",
        location: "Some random address, Bulgaria",
        facilities: [
            "Wifi",
            "Parking Place",
            "Breakfast",
            "Lunch",
            "Dinner",
            "Swimming Pool",
            "Spa",
        ],
        imgs: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1683769252575-e986af039184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1683769252575-e986af039184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1683769252575-e986af039184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        ],
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex justify-center gap-24 max-xl:gap-14 max-lg:flex-col max-lg:items-center mt-20 mx-5">
                <div>
                    <div className="flex flex-col items-center max-w-[35em]">
                        <img src={images[0].url} alt="selected image" />
                        <div className="flex justify-center gap-4 max-w-[27em] flex-wrap mt-8">
                            {images.map((img) => (
                                <img
                                    className="w-24 max-sm:w-20 cursor-pointer opacity-65 hover:opacity-100"
                                    src={img.url}
                                    alt="estate image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight mb-1">
                        {estate.name}
                    </h2>
                    <p className="text-gray-500 font-medium mb-5">
                        {estate.location}
                    </p>
                    <div className="flex flex-col gap-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg ">
                        <p className="font-medium text-gray-500">
                            {estate.description}
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Total price:{" "}
                            <span className="font-bold text-xl">
                                {mockEstate.price}
                                {mockEstate.currency}
                            </span>
                        </p>
                        <p className="flex justify-between font-medium text-gray-800">
                            Type of estate:{" "}
                            <span className="font-medium text-lg">
                                {estate.category.name}
                            </span>
                        </p>
                        <div className="flex justify-between">
                            <p className="font-medium text-gray-800">
                                Arrive Hour:{" "}
                                <span className="font-bold text-lg ml-4 max-sm:ml-2 bg-gray-600 text-white p-2 rounded-md">
                                    {estate.arrive_hour}
                                </span>
                            </p>
                            <p className="font-medium text-gray-800">
                                Leave Hour:{" "}
                                <span className="font-bold text-lg ml-4 max-sm:ml-2 bg-gray-600 text-white p-2 rounded-md">
                                    {estate.leave_hour}
                                </span>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">
                                Facilities:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(facilities).map(([key, value], index) => (
                                    <div key={index} className="bg-gray-200 font-bold cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                                        {key}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
