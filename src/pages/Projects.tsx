import { useState } from "react";
import CardProjects from "../components/CardProjects/CardProjects";
import data from "../data/data"
import ReactPaginate from "react-paginate";

const itemsPerPage = 3

export default function Projects() {

    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itemsPerPage
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

    const handlePageChange = (event: { selected: number }) => {
        setCurrentPage(event.selected)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className='text-white flex flex-col max-w-[1100px] rounded-lg mx-auto relative pb-24 lg:pb-10'>

            <div className="text-center mt-[7rem] mb-4 lg:mb-0 lg:hidden">
                <h2 className=" text-gray-600/100 text-[3rem]   ">
                    Projects
                </h2>
            </div>

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
                            description={'description' in item ? (item as { description?: string }).description : undefined}
                        />
                    ))}
                </div>

            </div>

            {/* Fixed pagination pill — sits above the bottom navbar on desktop, above the safe area on mobile */}
            <div className="fixed bottom-6 lg:bottom-24 left-1/2 -translate-x-1/2 z-30 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-4 py-2.5 flex items-center gap-2">
                <ReactPaginate
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName="flex gap-1 items-center"
                    pageClassName="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition duration-200 hover:bg-white/10 text-sm text-gray-300"
                    pageLinkClassName="w-full h-full flex justify-center items-center"
                    activeClassName="bg-indigo-600 text-white"
                    previousLabel={<span className="text-gray-400 hover:text-white transition-colors px-1">←</span>}
                    nextLabel={<span className="text-gray-400 hover:text-white transition-colors px-1">→</span>}
                    previousClassName="flex items-center cursor-pointer"
                    nextClassName="flex items-center cursor-pointer"
                    disabledClassName="opacity-30 cursor-not-allowed"
                    breakLabel={<span className="text-gray-600 px-1">…</span>}
                    breakClassName="flex items-center"
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                />
                <span className="text-gray-600 text-xs border-l border-white/10 pl-3">{data.length}</span>
            </div>

        </div>
    )
}
