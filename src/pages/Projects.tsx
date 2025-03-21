import { useState } from "react";
import CardProjects from "../components/CardProjects/CardProjects";
import data from "../data/data"
import ReactPaginate from "react-paginate";

const itemsPerPage = 3

export default function Projects() {

    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itemsPerPage
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className='text-white flex flex-col max-w-[1100px] rounded-lg mx-auto relative pb-3'>

            {<div className="text-center mt-[7rem] mb-4 lg:mb-0 lg:hidden">
                <h2 className=" text-gray-600/100 text-[3rem]   ">
                    Projects
                </h2>
            </div>}

            <div className="absolute w-[50%] h-[30%] bg-[#e02cad] rounded-full blur-[150px] top-[60%] left-[70%] transform -translate-x-[70%] -translate-y-1/2 " />
            <div className="absolute w-[20%] h-[40%] bg-[#0550CF] rounded-full blur-[150px] top-[20%] left-[30%] transform -translate-x-[70%] -translate-y-1/2 " />

            <div className=" flex flex-col w-full mt-[0rem] items-center ">

                <div className="text-center text-[7rem] font-extrabold mb-0 hidden lg:block ">
                    <h2 className="relative text-gray-600/10">
                        Projects
                    </h2>
                    <h3 className="absolute text-indigo-500 text-[3rem] font-bold left-1/2 -translate-x-1/2 top-[8.5%]  ">
                        Projects
                    </h3>
                </div>

                <div className=" mt-0 flex gap-2  flex-wrap items-center justify-center " >

                    {paginatedData.map(item => (
                        <CardProjects
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            tecnologies={item.technologies}
                            link={item.links}
                        />
                    ))}

                </div>

                <div className="m-5 flex flex-row gap-3 mt-10">

                    <ReactPaginate
                        pageCount={Math.ceil(data.length / itemsPerPage)}
                        onPageChange={(event) => setCurrentPage(event.selected)}
                        containerClassName="flex gap-2 mt-4 items-center"
                        pageClassName="w-8 h-10 border rounded-md flex justify-center items-center cursor-pointer transition duration-200 hover:bg-blue-600"
                        pageLinkClassName="w-full h-full flex justify-center items-center "  //  Fix clickable area
                        activeClassName="bg-indigo-600 text-white"
                        previousLabel="Prev"
                        nextLabel="Next"
                        disabledClassName="opacity-50 cursor-not-allowed"
                    />

                </div>
                <div>Total of Projects: {data.length}</div>
            </div>
        </div>
    )
}
