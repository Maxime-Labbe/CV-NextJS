import '../contact.css'

type ContactProps = {
    orientation: string;
    elem: string | Array<{ logo: JSX.Element; link: string }>;
    };

export default function Contact({ orientation, elem }: ContactProps) {
  return (
    <div className={`fixed ${orientation=="left" ? "left-20 right-auto" : "right-20 left-auto"} bottom-0 w-10 h-72 flex flex-col items-center z-10`}>
      {typeof elem === "string" ? 
      <h4 className="rotate-90 w-auto font-medium"><a className="email w-auto" href={`mailto:${elem}`}>{elem}</a></h4>:
      <ul className="w-auto flex flex-col items-center list-none gap-4 m-[-55px]">
        {elem.map((item: any, index: number) => (
          <li className="contact-icon" key={index}>
            <a href={item.link} target="_blank">
                {item.logo}
            </a>
          </li>
        ))}
      </ul>}
      <div className='line'></div>
    </div>
  );
}