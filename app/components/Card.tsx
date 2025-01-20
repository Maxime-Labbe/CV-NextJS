import '../about.css'

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
            <div className="card-container">
                {place === "right" ? (
                    <div className="card group right">
                        <h2 className="card-title">{title}</h2>
                        <div className="text-container sm:rounded-l-2xl">
                            <p className="text">
                                {description.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="card group left">
                        <div className="text-container sm:rounded-r-2xl">
                            <p className="text">
                                {description.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </p>
                        </div>
                        <h2 className="card-title">{title}</h2>
                    </div>
                )}
            </div>
            <div className="card-container-phone">
                <div className="card group right">
                    <h2 className="card-title">{title}</h2>
                    <div className="text-container">
                        <p className="text">
                            {description.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};