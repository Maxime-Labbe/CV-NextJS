import Card from '../card';

export default function AboutMe() {
    return (
        <main>
            <div className='test'>
                <Card title="Moi" description="Je suis étudiant à ENIGMA-SCHOOL. J'apprends l'informatique et je suis passionné par le développement web." />
            </div>
            <div className='test'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes compétences techniques :</h3>
                <div className='flex flex-row justify-around wrap'>
                    <Card title="HTML/CSS/JS" description="Je suis bon au développement web avec HTML/CSS/JS. J'ai déjà eu l'occasion de faire quelques sites pour des projets personnels." />
                    <Card title="NextJS" description="Je suis toujours en train d'apprendre NextJS." />
                    <Card title="C" description="J'ai déjà fait du développement en C. Je connais les bases du langage et j'ai également quelques connaissances plus avancées. J'ai déjà également utilisé SDL2." />
                    <Card title="Java" description="J'ai pu faire quelques programmes en java, je connais les bases du langage." />
                    <Card title="Python" description="J'ai une connaissance avancée de python. J'ai également déjà utilisé quelques libraires comme Flask," />
                </div>
            </div>
            <div className='test'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes expériences :</h3>
                <div className='flex flex-row justify-around'>
                    <Card title="Les restos du cœur" description="I did an intership in this french charity." />
                    <Card title="Mes projets" description="I did a lot of projects on my own in differents languages like HTML/JS/CSS, NextJS, C or Java. You can see them on my Github." />
                </div>
            </div>
        </main>
    )
};