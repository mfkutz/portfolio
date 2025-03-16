import { useState } from "react"
import data from "../data/data"
import CardProjects from "../components/CardProjects/CardProjects"


const itemsPerPage = 2




export default function BasicPaginationExample() {

    const [currentPage, setCurrentPage] = useState(1)

    const result = data.length / itemsPerPage

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage

    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage) ///start,end

    return (
        <div className='text-white flex flex-col max-w-[1100px] rounded-lg  mx-auto gruppo-regular'>

            <div className=" flex flex-col w-full mt-[3rem] items-center">
                <h1 className="text-[2rem]">Projects</h1>
                <div className=" mt-5 flex gap-2  flex-wrap items-center justify-center " >

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

                <div className="m-5 flex flex-row gap-3">

                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-black"
                    >Prev</button>

                    <span>Page {currentPage} of {totalPages}</span>

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-black"
                    >Next</button>
                </div>


            </div>
        </div>
    )
}
