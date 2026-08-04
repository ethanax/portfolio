import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-surface/90 px-8 py-4 backdrop-blur">
            <Link href="/">
            
                <h1 className="cursor-pointer text-xl font-semibold transition-colors hover:text-muted-foreground">
                    Ethan Xin
                </h1>
            
            </Link>

            <div className="flex items-center gap-6">
                <Link href="about" className="transition-colors hover:text-muted-foreground">
                    About
                </Link>
                <Link href="projects" className="transition-colors hover:text-muted-foreground">
                    Projects
                </Link>
                <Link href="contact" className="transition-colors hover:text-muted-foreground">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
