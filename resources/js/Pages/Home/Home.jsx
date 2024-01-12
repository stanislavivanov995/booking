import Description from '@/Components/Home/Description';
import FAQ from '@/Components/Home/FAQ';
import Footer from '@/Components/Home/Footer';
import HeadContainer from '@/Components/Home/HeadContainer';
import Heading from '@/Components/Home/Heading';
import LatestEstates from '@/Components/Home/LatestOffers';
import NavBar from '@/Components/Home/Navbar';

import { Head } from '@inertiajs/react';


export default function Home({ auth, categories }) {
    return (
        <>
            <Head title="Home" />

            <Heading auth={auth} />
            <NavBar />
            <HeadContainer categories={categories} />
            <Description />
            <LatestEstates />
            <FAQ />
            <Footer />
        </>
    );
}
