import Card from '../card';

export default function Contact() {
    return (
        <main>
            <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>How to contact me :</h3>
            <div className='flex flex-row justify-around'>
                <Card title="GitHub" description="My GitHub : " link='https://github.com/Maxime-Labbe' image='/github.svg' />
                <Card title="LinkedIn" description="My LinkedIn : " link='https://www.linkedin.com/in/maxime-labbe-626012293/' image='/linkedin.svg' />
                <Card title="Mail" description="My Mail : " link='mailto:maxime30labbe@gmail.com' image='/mail.svg' />
                <Card title="Phone" description="My Number : " link='phoneto:+33770107148' image='/phone.svg' />
            </div>
        </main>
    )
};