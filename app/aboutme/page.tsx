import Card from '../card';

export default function AboutMe() {
    return (
        <main>
            <div className='test'>
                <Card title="About me" description="I'm a student at ENIGMA-SCHOOL in Lille. I'm learning IT and I'm passionate about web development." />
            </div>
            <div className='test'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>My technical skills :</h3>
                <div className='flex flex-row justify-around wrap'>
                    <Card title="HTML/CSS/JS" description="I'm good at web development with HTML/CSS/JS. I already did some websites for personal purposes." />
                    <Card title="NextJS" description="I'm still learning NextJS." />
                    <Card title="C" description="I have basic knowledge of C development. I also know about SDL2." />
                    <Card title="Java" description="I have already worked with java, so I know the basics." />
                    <Card title="Python" description="I have advanced knowledge of python. I have already used some libraries like Flask," />
                </div>
            </div>
            <div className='test'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>My experiences :</h3>
                <div className='flex flex-row justify-around'>
                    <Card title="Les restos du cœur" description="I did an intership in this french charity." />
                    <Card title="My projects" description="I did a lot of projects on my own in differents languages like HTML/JS/CSS, NextJS, C or Java. You can see them on my Github." />
                </div>
            </div>
        </main>
    )
};