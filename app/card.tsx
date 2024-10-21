import { desc } from "framer-motion/client"
import Image from "next/image"

export default function Card({
    title,
    description,
    link,
    place
}: {
    title: string,
    description: string,
    place: string,
    link?: string,
}) {
    return (
        <>
            {place === "right" ? (
                <div className="card group right">
                    <h2 className="text-center mx-auto text-[25px] sm:text-4xl font-bold text-[#F9F871]">{title}</h2>
                    <div className="cardText w-3/5 bg-[#DCDCDC] rounded-l-2xl flex-col justify-center flex">
                        <p className="w-11/12 text-center mt-4 sm:mt-2 text-base sm:text-2xl font-normal text-[#191923] mx-auto">
                        {description.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                        </p>
                    </div>
                </div>
            ) : (
            <div className="card group left">
                <div className="cardText w-3/5 bg-[#DCDCDC] rounded-r-2xl h-32 flex-col justify-center flex">
                    <p className="w-11/12 text-center mt-4 sm:mt-2 text-base sm:text-2xl font-normal text-[#191923] mx-auto">
                    {description.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </p>
                </div>
                <h2 className="text-center mx-auto text-[25px] sm:text-4xl font-bold text-[#F9F871]">{title}</h2>
            </div>
            )}
        </>
    )
};