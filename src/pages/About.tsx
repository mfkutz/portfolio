
export default function About() {
    return (
        <div className=' flex h-screen text-white max-w-[900px] mx-auto '>

            <div className=" flex flex-col w-full ">

                <div className="text-center text-[8rem] font-extrabold mb-6 ">
                    <h2 className="relative text-gray-600/10">
                        About
                    </h2>
                    <h3 className="absolute text-indigo-500 text-[3rem] font-bold left-1/2 -translate-x-1/2 top-[8.5%]  ">
                        About Me
                    </h3>
                </div>
                <div className="flex flex-row  ">
                    <div className="w-full bg-green-400 max-w-[300px] relative ">
                        <div className="border w-[300px] h-[460px]  border-indigo-600 absolute left-[1rem] z-0">

                        </div>
                        <img
                            src=""
                            alt="me"
                            className="z-50"
                        />
                    </div>

                    <div className=" w-full max-w-[750px]  flex flex-col p-10">
                        <p className="text-[14px] flex">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quibusdam fuga non ullam numquam pariatur, porro debitis iste reprehenderit doloremque dicta nesciunt placeat consequatur! Quisquam earum quo delectus adipisci placeat.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quibusdam fuga non ullam numquam pariatur, porro debitis iste reprehenderit doloremque dicta nesciunt placeat consequatur! Quisquam earum quo delectus adipisci placeat.
                            nesciunt placeat consequatur! Quisquam earum quo delectus adipisci placeat.
                        </p>


                        <section className=" flex flex-row justify-around mt-6">

                            <div className="flex flex-col items-center justify-center ">
                                <div className="flex flex-col items-center">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Name</label>
                                    <h3 className="font-semibold">Martin Federico Kutzner</h3>
                                </div>
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Country</label>
                                    <h3 className="font-semibold">Córdoba - Argentina</h3>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Phone</label>
                                    <h3 className="font-semibold">+54 3541 395446</h3>
                                </div>
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Email</label>
                                    <h3 className="font-semibold">mfkutz@gmail.com</h3>
                                </div>
                            </div>
                        </section>

                        <section className=" flex flex-col items-center mt-6 ">
                            <label className="text-[0.75rem] font-semibold text-indigo-600">Education</label>
                            <p className="text-center leading-5 font-semibold max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi harum architecto ipsam minus hic min didjf isdjf.
                            </p>
                        </section>



                    </div>
                </div>

            </div>
        </div>
    )
}
