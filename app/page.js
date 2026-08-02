import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1 className="txt-6xl font-bold">
          Hi, I'm Ethan!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          First year Computer Science Student at UCLA building software for social impact. 676767676767
        </p>
      </main>
    </>
  );
}
