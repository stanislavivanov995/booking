import Heading from "@/Components/Home/Heading";
import NavBar from "@/Components/Home/Navbar";

export default function ClientLayout({ auth, children }) {
    return (
        <>
            <Heading auth={auth} />
            <NavBar />
            {children}
        </>
    );
}
