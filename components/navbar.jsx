import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-white border-b px-8 py-4 flex justify-between items-center">
            <Link href="/">
            
                <h1 className="text-xl font-semibold hover:text-gray-500 transition-colors cursor-pointer">
                    Ethan Xin
                </h1>
            
            </Link>

            <div className="flex items-center gap-6">
                <Link href="about" className="hover:text-gray-500 transition-colors">
                    About
                </Link>
                <Link href="projects" className="hover:text-gray-500 transition-colors">
                    Projects
                </Link>
                <Link href="contact" className="hover:text-gray-500 transition-colors">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
