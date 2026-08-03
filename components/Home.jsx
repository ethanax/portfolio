import Image from 'next/image';

export default function Home() {
    return (
    <>
      <main>

        <section className="flex items-center justify-between px-20 py-20">

            <div className="w-1/2">
                <h1 className="text-8xl font-bold">
                    Hi, I'm Ethan!
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    First year Computer Science Student at UCLA building software for social impact. 676767676767
                </p>

                <p className="mt-4 text-lg text-gray-600">
                My current interests are...
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
        
      </main>
    </>
  );
}