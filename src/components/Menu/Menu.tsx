import { Link } from 'react-router-dom'
import { BiHome, BiLogoGithub, BiLogoLinkedinSquare, BiCoffee, BiSolidContact, BiSolidFace } from "react-icons/bi";

export default function Menu() {
    return (
        <nav className='fixed lg:bottom-6 top-7 lg:top-auto left-1/2 transform -translate-x-1/2  bg-black/30 backdrop-blur-md  p-3 rounded-full shadow-lg flex items-center gap-3 max-w-[500px] w-full justify-between'>
            <div className='flex justify-around w-full border-r'>

                <Link to='/' className='group relative p-3 bg-black/30 rounded-full transition-transform duration-300 hover:scale-110'>
                    <span className='absolute top-16 lg:-top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-65 transition-opacity duration-300 hidden lg:block'>
                        Home
                    </span>
                    <BiHome color='white' size={28} />
                </Link>


                <Link to='/projects' className='group relative p-3 bg-black/30 rounded-full transition-transform duration-300 hover:scale-110'>
                    <span className='absolute top-16 lg:-top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-65 transition-opacity duration-300 hidden lg:block'>
                        Projects
                    </span>
                    <BiCoffee color='white' size={28} />
                </Link>

                <Link to='/contact' className=' group relative p-3 bg-black/30 rounded-full transition-transform duration-300 hover:scale-110'>
                    <span className='absolute top-16 lg:-top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-65 transition-opacity duration-300 hidden lg:block'>
                        Contact
                    </span>
                    <BiSolidContact color='white' size={28} />
                </Link>

                <Link to='/about' className=' group relative p-3 bg-black/30 rounded-full transition-transform duration-300 hover:scale-110'>
                    <span className='absolute top-16 lg:-top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-65 transition-opacity duration-300 hidden lg:block'>
                        About
                    </span>
                    <BiSolidFace color='white' size={28} />
                </Link>

            </div>

            <div className='flex  gap-2 '>
                <a href='https://www.linkedin.com/in/martin-kutzner' target='_blank' rel="noopener noreferrer" ><BiLogoLinkedinSquare color='white' size={28} /></a>
                <a href='https://github.com/mfkutz' target='_blank' rel="noopener noreferrer"><BiLogoGithub color='white' size={28} /></a>
            </div>
        </nav>
    )
}
