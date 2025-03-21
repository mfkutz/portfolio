
export default function About() {
    return (
        <div className='h-scree  text-white flex flex-col items-center relative px-4 pb-4'>
            {<div className="text-center mt-[7rem] mb-4 lg:mb-0 lg:hidden">
                <h2 className=" text-gray-600/100 text-[3rem]   ">
                    About
                </h2>
            </div>}
            <div className="absolute w-[50%] h-[20%] bg-[#e02cad] rounded-full blur-[150px] top-[60%] left-[70%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="absolute w-[20%] h-[20%] bg-[#0550CF] rounded-full blur-[150px] top-[20%] left-[30%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="text-center text-[7rem] font-extrabold mb-0 hidden lg:block ">
                <h2 className="relative text-gray-600/10">
                    About
                </h2>
                <h3 className="absolute text-indigo-500 text-[3rem] font-bold left-1/2 -translate-x-1/2 top-[8.5%]  ">
                    About Me
                </h3>
            </div>

            <div className="bg-black/30 flex flex-row-reverse px-1 sm:px-12 py-8 rounded-lg backdrop-blur-sm items-center gap-4   ">
                <div className=" lg:max-w-[450px] max-w-[400px] px-3">

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
                <div>
                    <img
                        src="/astronaut.webp"
                        alt="astronaut"
                        className="max-w-[450px] rounded-lg hidden lg:block "
                    />
                </div>
            </div>

        </div>
    )
}


