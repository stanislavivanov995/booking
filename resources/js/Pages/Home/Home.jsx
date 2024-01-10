import Description from '@/Components/Home/Description';
import HeadContainer from '@/Components/Home/HeadContainer';
import Heading from '@/Components/Home/Heading';
import NavBar from '@/Components/Home/Navbar';

import { Head } from '@inertiajs/react';


export default function Home({ auth, categories }) {
    return (
        <>
            <Head title="Home" />
            <Heading auth={auth} />
            <NavBar />
            <HeadContainer />
            <Description />
        </>
    );
}
