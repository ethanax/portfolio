export default function Navbar(){
    return(
        <nav className="flex w-full items-start justify-between px-4 pt-4">
            <h1 className="text-xl font-semibold">Ethan Xin</h1>
            <div className="flex items-center gap-6">
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    );
}
