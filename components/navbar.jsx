import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex w-full items-start justify-between px-4 pt-4">
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
