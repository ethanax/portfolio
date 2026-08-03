import Image from 'next/image';

export default function Home() {
    return (
    <>
      <main className="bg-gray-100 min-h-screen">

        {/* HERO PREVIEW */}
        <section className="flex items-center justify-between px-20 py-20">

            <div className="w-1/2">
                <h1 className="text-8xl font-bold">
                    Hi, I'm Ethan!
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Second year Computer Science Student at UCLA building software for social impact.
                </p>

            </div>

            <div className="w-1/2 justify-center">
                <Image
                    src="/images/ethan-xin.jpeg"
                    alt="Ethan Xin"
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                    width={300}
                    height={300}
                />
            </div>
        </section>

        {/* ABOUT ME PREVIEW */}
        <section className="px-20 py-20">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600">
                I am a second year Computer Science student at UCLA with a passion for building software that has a positive social impact. 
                I have experience in web and software development, and am seeking experience in machine learning and data science. 
                In my free time, you can catch me jamming out on the piano, shooting hoops, watching movies, hanging out with my friends and family, and going on side-quests.
            </p>
        </section>

        {/* PROJECTS PREVIEW */}
        <section className="px-20 py-20">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-gray-600">
                Here are some of the projects I have worked on:
            </p>
            <ul className="list-disc list-inside mt-4">
                <li>Project 1: Description of project 1.</li>
                <li>Project 2: Description of project 2.</li>
                <li>Project 3: Description of project 3.</li>
            </ul>
        </section>

        {/* CONTACT PREVIEW */}
        <section className="px-20 py-20">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-600">
                Feel free to reach out to me if you have any questions or would like to collaborate!
            </p>
        </section>
        
      </main>
    </>
  );
}