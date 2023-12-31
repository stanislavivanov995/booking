import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center p-5 pt-6 sm:pt-0">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}
            <div className='flex-col items-end border p-[3em] sm:rounded-[15px] shadow-2xl'>
                <h1 className='text-black left-[50%] top-[11em] sm:text-[1.5em] text-[1.5em] mb-[2em] tracking-wide text-center font-bold border-b p-3 border-b-gray-500'>Log in for seamless booking | New here? Register to unlock exclusive deals and begin your journey</h1>
                <div className='flex md:justify-center md:bg-white w-full bg-gray-500 rounded-[15px]'>
                    <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-2xl overflow-hidden rounded-[15px] sm:rounded-s-lg">
                        {children}
                    </div>
                    <div>
                        <img className='hidden lg:block w-full rounded-e-lg h-full shadow-2xl' src="https://cdn.discordapp.com/attachments/799208792063344661/1194025154259468298/login_image.jpg?ex=65aed994&is=659c6494&hm=a6ac6e89bd5cd77ae7f0fae65efd62bfdd2fdd131b6328f4a3fc3f2a3d5c6edb&" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
