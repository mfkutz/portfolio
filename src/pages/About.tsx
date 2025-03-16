
export default function About() {
    return (
        <div className=' flex h-screen text-white max-w-[900px] mx-auto  relative  '>

            {/* <div className="absolute w-[50%] h-[50%] bg-[#34ADBE] rounded-full blur-[150px] top-[60%] left-[70%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="absolute w-[20%] h-[50%] bg-[#34ADBE] rounded-full blur-[150px] top-[20%] left-[10%] transform -translate-x-[70%] -translate-y-1/2 " /> */}

            <div className="absolute w-[50%] h-[20%] bg-[#e02cad] rounded-full blur-[150px] top-[70%] left-[90%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="absolute w-[20%] h-[40%] bg-[#0550CF] rounded-full blur-[150px] top-[20%] left-[10%] transform -translate-x-[70%] -translate-y-1/2 " />

            <div className=" flex flex-col w-full  ">




                <div className="text-center text-[7rem] font-extrabold mb-6 ">
                    <h2 className="relative text-gray-600/10">
                        About
                    </h2>
                    <h3 className="absolute text-indigo-500 text-[3rem] font-bold left-1/2 -translate-x-1/2 top-[8.5%]  ">
                        About Me
                    </h3>
                </div>
                <div className="flex flex-row  ">
                    <div className="w-full bg-green-400 max-w-[300px] relative ">
                        {/* <div className="border w-[300px] h-[460px]  border-indigo-600 absolute left-[1rem] z-0">

                        </div> */}
                        <img
                            src="#"
                            alt="me"
                            className="z-50"
                        />
                    </div>

                    <div className=" w-full max-w-[750px]  flex flex-col p-10 bg-black/30">
                        <p className="text-[1rem] flex">
                            I'm a passionate full-stack developer from Argentina with experience in JavaScript, TypeScript, React, and Node.js.
                            I enjoy building efficient and scalable web applications, always looking for ways to improve performance
                            and user experience. I love learning new technologies and continuously expanding my skills.
                            Let's connect and create something great together!
                        </p>


                        <section className=" flex flex-row justify-around mt-6">

                            <div className="flex flex-col items-center justify-center ">
                                <div className="flex flex-col items-center">
                                    <label className="text-[1rem] font-semibold text-indigo-600">Name</label>
                                    <h3 className="font-semibold">Martin Federico Kutzner</h3>
                                </div>
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-[1rem] font-semibold text-indigo-600">Country</label>
                                    <h3 className="font-semibold">Córdoba - Argentina</h3>
                                </div>
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-[1rem] font-semibold text-indigo-600">Telegram</label>
                                    <h3 className="font-semibold">@Mfkutz</h3>
                                </div>
                            </div>

                            {/* <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Telegram</label>
                                    <h3 className="font-semibold">@Mfkutz</h3>
                                </div>
                                 <div className="flex flex-col items-center mt-5">
                                    <label className="text-[0.75rem] font-semibold text-indigo-600">Email</label>
                                    <h3 className="font-semibold">socialcode88@gmail.com</h3>
                                </div>
                            </div> */}
                        </section>

                        <section className=" flex flex-col items-center mt-5 ">
                            <label className="text-[1rem] font-semibold text-indigo-600">Technical Training</label>
                            <p className="text-center leading-5 font-semibold max-w-[400px] mt-1">
                                I’ve completed intensive bootcamps and self-paced courses,
                                focusing on full-stack development, cloud technologies, and best practices
                                in modern web applications.
                            </p>
                        </section>



                    </div>
                </div>

            </div>

        </div>
    )
}
