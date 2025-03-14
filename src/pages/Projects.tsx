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
