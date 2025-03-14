import { useEffect, useState } from "react";

export default function Home() {

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-screen flex items-center justify-center flex-col relative bg-[#0b0f16] overflow-hidden'>

            <div className="absolute w-[50%] h-[50%] bg-[#34ADBE] rounded-full blur-[150px] top-[60%] left-[70%] transform -translate-x-[70%] -translate-y-1/2"></div>

            <div className="max-w-[900px] bg-black/30 w-full rounded-lg backdrop-blur-sm flex p-10 gruppo-regular text-white">

                <div className="absolute top-5 right-5 text-white text-sm p-2 rounded-lg ">
                    <div>{time}</div>
                </div>


                <div className="w-full">
                    <h1 className="text-[5rem] font-semibold leading-none">
                        Martín Kutzner
                    </h1>
                    <span className=" text-[1.5rem] ">Fullstack developer</span>
                    <section className=" mt-8 items-center justify-between flex flex-wrap">
                        <img src="./React-Dark.svg" alt="" className="w-10" />
                        <img src="./NodeJS-Dark.svg" alt="" className="w-10" />
                        <img src="./JavaScript.svg" alt="" className="w-10" />
                        <img src="./TypeScript.svg" alt="" className="w-10" />
                        <img src="./NextJS-Dark.svg" alt="" className="w-10" />
                        <img src="./TailwindCSS-Dark.svg" alt="" className="w-10" />
                        <img src="./git.svg" alt="" className="w-10" />
                        <img src="./Firebase-Dark.svg" alt="" className="w-10" />
                        <img src="./Github-Dark.svg" alt="" className="w-10" />
                        <img src="./HTML.svg" alt="" className="w-10" />
                        <img src="./Linux-Dark.svg" alt="" className="w-10" />
                        <img src="./Solidity.svg" alt="" className="w-10" />
                    </section>
                    <div className="text-center mt-10 ">Technologies I use daily</div>
                </div>
            </div>
        </div>
    )
}


// bg-[url("./fondo.jpg")]