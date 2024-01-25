import { useState } from "react";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

export default function Details({auth, estate, facilities, images, owner}) {

console.log('Potrebitel: ', auth); // Veroqtno kum momenta nqma da ti trqbva, no neka ostane, shte e nujno za bookvaneto
console.log('Imot: ', estate); // Imotut zaduljitelno 
console.log('Ekstri: ', facilities); // Vinagi ima ekstri kato model, moje navsqkude da e 0, no vrushta masiv
console.log('Snimkite: ', images); // Ppc moje i da nqma snimki, zatova neka ima defaut. Ako images.length > 0 samo togava da se pokazvat


    // const [selectedImage, setSelectedImage] = useState(defaultImage);
    // const estateId = window.location.pathname.split("/")[3];

    // if (images.length > 0 && selectedImage === defaultImage) {
    //     setSelectedImage(images[0].url);
    // }

    // const handleSelectedImage = (event) => {
    //     setSelectedImage(event.target.src);
    // };

    return (
        <>
            <section>
                {/* <div>
                {images.length > 0 ? (
                    <div className="flex flex-col items-center max-w-[35em]">
                        <img
                            src={selectedImage}
                            alt="selected image"
                            className="w-[35em] h-[28em]"
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
                    <div className="flex flex-col items-center max-w-[35em]">
                        <img src={selectedImage} alt="selected image" />
                    </div>
                )}
            </div> */}
                <div className='bg-gray-200'>
                    <img src="https://city-centre-bright-cozy-apartment-stara-zagora.hotelmix.bg/data/Photos/OriginalPhoto/11410/1141023/1141023961/City-Centre-Bright-Cozy-Apartment-For-4-Persons-Stara-Zagora-Exterior.JPEG" className='block px-5 pt-5 h-[750px] rounded-xl w-full' alt="" />
                </div>
                <div id='wrapper' className='bg-gray-200 pb-5 flex justify-between'>
                    {/* top-section-container */}

                    <div className='bg-white m-5 w-[80%] rounded-xl'>
                        <div>
                            <div className='p-10 flex justify-between'>
                                <div className=''>
                                    <h1 className='text-[35px] text-zinc-800 font-bold'>Hotel Lavaza</h1>
                                    <div className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                        <h4>1432 Bay Rd, Miami Beach, FL 33139</h4>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-2 text-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fa-solid fa-house text-[30px]" width="35px" height="35px" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                                    <p>Estate Type - Hotel</p>
                                </div>
                            </div>
                            {/* facilities */}
                            <hr />
                            <div className='flex flex-wrap items-center justify-around p-2'>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                                    <h3 className='text-[20px]'>Wi-Fi</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                                    <h3>Parking</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 512 512"><path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" /></svg>
                                    <h3>Breakfast</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 512 512"><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" /></svg>
                                    <h3>Lunch</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
                                    <h3>Dinner</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 576 512"><path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" /></svg>
                                    <h3>Swimming pool</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div>
                                <div className='flex flex-col items-center text-center px-10 py-4 gap-3' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[35px]" width="45px" height="45px" viewBox="0 0 512 512"><path d="M272 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L295.8 82.8C280.7 69.1 272 49.7 272 29.2V24zM0 320v16V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H277.3c-13.8 0-27.3-4.5-38.4-12.8l-85.3-64C137 166.7 116.8 160 96 160c-53 0-96 43-96 96v64zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm112 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM360 0c-13.3 0-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L407.8 82.8C392.7 69.1 384 49.7 384 29.2V24c0-13.3-10.7-24-24-24zM64 128A64 64 0 1 0 64 0a64 64 0 1 0 0 128z" /></svg>
                                    <h3>Spa</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </div >
                            </div >
                            <hr />
                            {/* facilities */}
                        </div >
                        {/* top-section-container */}

                        {/* bottom-section */}
                        <div className='p-10'>
                            <h2 className='text-[25px] font-bold mb-5'>About this estate</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident perferendis soluta quam laborum ducimus numquam nostrum harum corrupti laudantium suscipit asperiores ipsam magni at, ea inventore maxime veritatis dolorum velit? Distinctio eligendi omnis ratione molestiae, veniam culpa sit, dolor enim est aperiam molestias commodi debitis similique, accusamus optio? Iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quas repudiandae animi, atque, dolor a et minima laboriosam ducimus vel quod porro officiis voluptate! Ut nobis dolorem ullam, deserunt eius eum reprehenderit cumque dolore quas sit expedita possimus autem animi voluptate quos repellat debitis aliquam ad. Reiciendis, amet. Mollitia, corporis.</p>
                        </div>
                        {/* bottom-section */}
                    </div >
                    {/* Right section */}
                    <div className='bg-white mx-5 my-5 h-[350px] w-[25%] rounded-xl'>
                        <div className='bg-zinc-800 h-[50px] flex gap-2 items-center rounded-t-xl justify-center px-2 text-[18px] text-white'>
                            <h2>350 BGN /</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-400" width="20px" height="20px" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
                        </div>
                        <div className='flex flex-col h-[80%] items-center text-[20px] justify-evenly gap-2 mt-5'>
                            <h2>Owner</h2>
                            <p className='text-[25px] font-bold'>Andrew Petrov</p>
                            <div className='flex items-center gap-5'>
                                <i class="fa-solid fa-phone"></i>
                                <h3>089538124385</h3>
                            </div>
                            <span className='border border-t-gray-500'></span>
                            <button className='w-[80%] bg-zinc-800 py-2 rounded-xl text-white px-2 my-5 m-auto self-end hover:opacity-45 duration-100'>Book now</button>
                        </div>
                    </div >
                    {/* Right section */}
                </div >
            </section >


        </>
    )
}