import { Head } from '@inertiajs/react';


export default function error404() {
    return (
        <>
            <Head title="Error" />
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-12 flex xl:flex-row lg:gap-6 gap-6 flex-col justify-center items-center">
                        <a
                            href="/"
                            className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Go back home
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}