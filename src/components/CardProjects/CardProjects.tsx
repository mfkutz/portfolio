import { FaExternalLinkAlt } from "react-icons/fa";

type Tecnology = {
    name: string
    icon: string
}

type Links = {
    github: string
    liveDemo: string
}

type CardProjectsProps = {
    name: string
    image: string
    tecnologies: Tecnology[]
    link: Links
}


export default function CardProjects({ name, image, tecnologies, link }: CardProjectsProps) {
    return (
        <article className="bg-black/30 max-w-[310px] w-full backdrop-blur-sm ">
            <h3 className="text-center mt-3">{name}</h3>
            <img
                src={image}
                alt="audiophile"
                className="h-[230px] w-full   object-contain"
            />
            <div className="p-4 gap-2 flex flex-col">
                <h3 className="">Tecnologies</h3>
                <div className="flex gap-4">
                    {tecnologies.map((tech) => (
                        <img key={tech.name} src={tech.icon} alt={tech.name} className="w-10" />
                    ))}
                </div>
                <h3 className="mt-3">External links</h3>
                <div className="flex gap-4 items-center">
                    <a href={link.github} target="_blank" className="cursor-pointer">
                        <img src="./Github-Dark.svg" alt="" className="w-10" />
                    </a>
                    <a href={link.liveDemo} target="_blank" className="cursor-pointer">
                        <FaExternalLinkAlt color="white" size={33} />
                    </a>
                </div>
            </div>
        </article>
    )
}
