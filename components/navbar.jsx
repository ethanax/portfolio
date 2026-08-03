import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-white border-b px-8 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Ethan Xin</h1>
            <div className="flex items-center gap-6">
                <Link href="about">
                    About
                </Link>
                <Link href="projects">
                    Projects
                </Link>
                <Link href="contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
