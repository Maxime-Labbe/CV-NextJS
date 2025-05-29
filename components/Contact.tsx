import '@/styles/contact.css'

type ContactProps = {
    orientation: string;
    elem: string | Array<{ logo: JSX.Element; link: string }>;
    };

export default function Contact({ orientation, elem }: ContactProps) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const anchor = e.target as HTMLAnchorElement;
    const copiedMessage = document.querySelector('.copied') as HTMLElement;
    if (anchor) {
      navigator.clipboard.writeText(anchor.textContent as string);
      copiedMessage.classList.add('active');
      setTimeout(() => {
        copiedMessage.classList.remove('active');
      }, 2000);
    }
  }

  return (
    <div className={`lg:fixed relative ${orientation=="left" ? "xl:left-20 lg:left-6 right-auto" : "xl:right-20 lg:right-6 left-auto"} lg:bottom-0 bottom-20 lg:w-10 w:1/2 lg:h-72 flex flex-col items-center z-10`}>
      {typeof elem === "string" ? 
      <h4 className="lg:rotate-90 w-auto font-medium xl:m-0 lg:m-[50px] hidden lg:block"><a className="email w-auto cursor-pointer" onClick={(e) => handleEmailClick(e)}>{elem}</a></h4>:
      <ul className="w-auto flex lg:flex-col flex-row items-center list-none gap-4 xl:m-[-55px]">
        {elem.map((item: any, index: number) => (
          <li className="contact-icon" key={index}>
            <a href={item.link} target="_blank">
                {item.logo}
            </a>
          </li>
        ))}
      </ul>}
      <div className='line'></div>
      <div className='copied'>Mail copied !</div>
    </div>
  );
}