//outdated page

import Card from '../card';

export default function Contact() {
    return (
        <main>
            <h2 className='text-center mt-12 sm:text-3xl text-2xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Comment me contacter :</h2>
            <div className='flex flex-row flex-wrap justify-around mb-12'>
                <Card title="GitHub" description="Mon GitHub : " link='https://github.com/Maxime-Labbe' image='/github.svg' />
                <Card title="LinkedIn" description="Mon LinkedIn : " link='https://www.linkedin.com/in/maxime-labbe-626012293/' image='/linkedin.svg' />
                <Card title="Mail" description="Mon mail : " link='mailto:maxime30labbe@gmail.com' image='/mail.svg' />
                <Card title="Phone" description="Mon numéro : " link='tel:+33770107148' image='/phone.svg' />
            </div>
        </main>
    )
};