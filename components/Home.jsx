import Image from 'next/image';

export default function Home() {
    return (
    <>
      <main className="bg-gray-100 min-h-screen">

        {/* HERO PREVIEW */}
        <section className="flex items-center justify-center px-10 min-h-[calc(100vh-80px)]">
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto gap-12">

                {/* Left column - text */}
                <div className="w-1/2">
                    <h1 className="text-8xl font-bold">
                        Hi, I'm Ethan!
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Second year Computer Science Student at UCLA building software for social impact.
                    </p>

                </div>

                {/* Right column - image */}
                <div className="w-1/2 flex justify-end">
                    <Image
                        src="/images/ethan-xin.jpeg"
                        alt="Ethan Xin"
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                        className="w-100 h-100 object-cover rounded-full border-4 border-gray-300 p-1" 
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </section>

        {/* ABOUT ME PREVIEW */}
        <section className="px-10 py-24 bg-gray-100 flex justify-center">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">
                    About Me
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    I am a second year Computer Science student at UCLA with a passion for building software that has a positive social impact. 
                    I have experience in web and software development, and am seeking experience in machine learning and data science. 
                    In my free time, you can catch me jamming out on the piano, shooting hoops, watching movies, hanging out with my friends and family, and going on side-quests.
                </p>
            </div>
            
        </section>

        {/* PROJECTS PREVIEW */}
        <section className="px-10 py-24 bg-gray-100 flex justify-center">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">
                    Projects
                </h2>
                <p className="text-lg text-gray-600">
                    Here are some of the projects I have worked on:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>Project 1: Description of project 1.</li>
                    <li>Project 2: Description of project 2.</li>
                    <li>Project 3: Description of project 3.</li>
                </ul>
            </div>
        
        </section>

        {/* CONTACT PREVIEW */}
        <section className="px-10 py-24 bg-gray-100 flex justify-center">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">
                    Contact
                </h2>
                <p className="text-lg text-gray-600">
                    Feel free to reach out to me if you have any questions or would like to collaborate!
                </p>

                {/* Contact form or social media links? */}
                
            </div>
        </section>

      </main>
    </>
  );
}