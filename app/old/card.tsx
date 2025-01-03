import Image from "next/image"

export default function Card({
    title,
    description,
    link,
    image
}: {
    title: string,
    description: string,
    link?: string,
    image?: string
}) {
    const titleHTML = []
    if (image) {
        titleHTML.push(<a href={link} aria-label={title} target="_blank" className="mx-auto mt-6"><Image className="hidden sm:block absolute top-32 left-24" src={image} alt="" width={100} height={100} key={image} /><Image className="sm:hidden block absolute top-28 left-11" src={image} alt="" width={80} height={80} key={image} /></a>)
    } else {
        titleHTML.push(<h2 className="hidden sm:block text-center mx-auto mt-[115px] text-4xl font-bold text-[#EEEDFF] group-hover:text-transparent" key={title}>{title}</h2>)
    }
    return (
        <div className="oldcard group">
            <h2 className="text-center mx-auto mt-[10px] text-[25px] sm:text-4xl font-bold sm:text-transparent sm:group-hover:text-[#EEEDFF]">{title}</h2>
            <p className="w-11/12 text-center ml-2 absolute mt-4 sm:mt-2 text-base sm:text-xl font-normal sm:text-transparent sm:group-hover:text-[#EEEDFF]">{description}</p>
            {titleHTML}
        </div>
    )
};