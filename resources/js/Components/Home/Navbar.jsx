export default function NavBar({ lastEstatesRef, faqRef, contactUsRef, mostRatedOffersRef }) {

    const handleLastEstatesView = () => {
        lastEstatesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleFaqView = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleContactUsView = () => {
        contactUsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleMostRatedOffersView = () => {
        mostRatedOffersRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav>
                <ul className="flex justify-center items-center p-4 gap-10 text-center sm:gap-0">
                    <li className="nav-links" onClick={handleLastEstatesView}>LATEST ESTATES</li>
                    <li className="nav-links" onClick={handleFaqView}>FAQ</li>
                    <li className="nav-links" onClick={handleMostRatedOffersView}>MOST & TOP RATED ESTATES</li>
                    <li className="nav-links" onClick={handleContactUsView}>CONTACT US</li>
                </ul>
            </nav>
        </>
    )
}