export default function NavBar({ lastEstatesRef, faqRef, contactUsRef }) {

    const handleLastEstatesView = () => {
        lastEstatesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleFaqView = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleContactUsView = () => {
        contactUsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav>
                <ul className="flex justify-center p-4">
                    <li className="nav-links" onClick={handleLastEstatesView}>LATEST ESTATES</li>
                    <li className="nav-links" onClick={handleFaqView}>FAQ</li>
                    <li className="nav-links" onClick={handleContactUsView}>CONTACT US</li>
                </ul>
            </nav>
        </>
    )
}