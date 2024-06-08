import Link from "next/link";

export default function Navbar (){
    return(
    <div className="flex justify-between fixed top-0 bg-[#F1D302] w-screen z-10">
        <h1 className="p-8">Portfolio</h1>
        <div className="flex flex-row-reversed ">
            <Link className="p-8 hover:text-white" href={"#home"}>Home</Link>
            <Link className="p-8 hover:text-white" href={"#about"}>About</Link>
            <Link className="p-8 hover:text-white" href={"#skills"}>Skills</Link>
            <Link className="p-8 hover:text-white" href={"#projects"}>Projects</Link>
            <Link className="p-8 hover:text-white" href={"#contact"}>Contact</Link>
        </div>
    </div>
    )
}