import { useState } from "react";
import DetailsFacitlities from "./DetailsFacilities";
import moment from 'moment';
import Heading from "@/Components/Home/Heading";
import NavBar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

export default function Details({ auth, estate, facilities, images }) {

    const [selectedImage, setSelectedImage] = useState(defaultImage);

    if (images.length > 0 && selectedImage === defaultImage) {
        setSelectedImage(images[0].url);
    }

    const handleSelectedImage = (event) => {
        setSelectedImage(event.target.src);
    };

    return (
        <>
        <Heading auth={auth} />
            <NavBar />

            <section className=" bg-gray-200">
                <div>
                    {images.length > 0 ? (
                        <div className="flex flex-col items-center w-[90%] md:w-[80%] m-auto bg-gray-200 justify-center p-2
                        2xl:w-full xl:w-[95%] xl:items-center lg:m-auto sm:ml-0 md:ml-[6em]">
                            <img
                                src={selectedImage}
                                alt="selected image"
                                className=" block rounded-xl sm:w-[60%] w-full h-auto sm:h-[700px] md:w-[90%] lg:w-[80%] 2xl:w-[60%] "
                            />
                            <div className="flex justify-center gap-4 max-w-[27em] flex-wrap mt-8">
                                {images.map((img) => (
                                    <img
                                        className="w-24 h-[6em] max-sm:w-20 cursor-pointer opacity-65 hover:opacity-100"
                                        src={img.url}
                                        alt="estate image"
                                        onClick={handleSelectedImage}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center m-auto w-full bg-gray-200 justify-center p-2">
                            <img src={selectedImage} alt="selected image" />
                        </div>
                    )}
                </div>

                <div id='wrapper' className='pb-5 flex flex-col  items-center m-auto px-2 2xl:pr-[2em] justify-between align-middle 
                2xl:w-full xl:w-[90%] w-full xl:items-center 2xl:flex-row 2xl:items-start'>
                    {/* top-section-container */}
                    <div className='bg-white m-5 ml-5 w-[90%] xl:w-[90%] rounded-xl'>
                        <div>
                            <div className="flex items-center w-full ml-auto gap-2 pt-6 pl-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width={"25px"} height={"25px"} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
                                <p>{moment(estate.created_at).format("LL")}</p>
                            </div>
                            <div className='p-10 pt-5 flex justify-between flex-col sm:flex-row'>
                                <div>
                                    <h1 className='text-[35px] text-zinc-800 font-bold'>{estate.name}</h1>
                                    <div className='flex items-center  gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                        <h4 className="w-[65px]">{estate.location}</h4>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-2 text-[20px] mt-5 sm:mt-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fa-solid fa-house text-[30px]" width="35px" height="35px" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                                    <p>{estate.category.name}</p>
                                </div>
                                <div className="flex gap-[3em] items-center sm:justify-start sm:mt-0 justify-evenly mt-10 text-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={"35px"} height={"35px"} viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                                        <p className="font-bold text-[18px]">{estate.beds === null ? '1' : estate.beds}</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={"35px"} height={"35px"} viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16z" /></svg>
                                        <p className="font-bold text-[18px]">{estate.rooms === null ? '1' : estate.rooms}</p>
                                    </div>
                                </div>
                            </div>
                            {/* facilities */}
                            <hr />
                            <h2 className="text-[30px] pl-0 sm:pl-10 pt-3 font-bold text-center">Available facitilies <span className="flex sm:justify-start justify-center gap-2 text-[13px] w-full font-italic">(need to have <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg> icon below the name)</span></h2>
                            <div className='sm:flex sm:flex-wrap items-center justify-around p-2 grid grid-cols-2'>
                                <DetailsFacitlities availableFacilities={facilities} />
                            </div >
                            <hr />
                            {/* facilities */}
                        </div >
                        {/* top-section-container */}

                        {/* bottom-section */}
                        <div className='p-10'>
                            <h2 className='text-[25px] font-bold mb-5'>About this estate</h2>
                            <p>{estate.description === null ? 'No description' : estate.description}</p>
                        </div>
                        {/* bottom-section */}
                    </div >
                    {/* Right section */}
                    <div className='bg-white mx-5 my-5 h-[350px] lg:w-[60%] md:w-[80%] sm:w-[30%] xl:w-[60%] 2xl:w-[35%] w-[80%] rounded-xl'>
                        <div className='bg-zinc-800 h-[50px] flex gap-2 items-center rounded-t-xl justify-center px-2 text-[18px] text-white'>
                            <h2>{estate.price} {estate.currency} /</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-400" width="20px" height="20px" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
                        </div>
                        <div className='flex flex-col h-[80%] items-center  text-[20px] justify-evenly gap-2 mt-5'>
                            <h2>OWNER</h2>
                            <p className='text-[25px] font-bold'>{estate.user.name}</p>
                            <div className='flex items-center gap-5'>
                                <i className="fa-solid fa-phone"></i>
                                <h3>{estate.user.email}</h3>
                            </div>
                            <span className='border border-t-gray-500'></span>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={"25px"} height={"25px"} viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                <p>{estate.arrive_hour}-{estate.leave_hour}</p>
                            </div>
                            <button className='w-[80%] bg-zinc-800 py-2 rounded-xl text-white px-2 my-5 m-auto self-end hover:opacity-45 duration-100'>Book now</button>
                        </div>
                    </div >
                    {/* Right section */}
                </div >
            </section >
            <Footer />

        </>
    )
}