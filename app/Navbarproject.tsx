import Link from "next/link";

export default function Navbarproject (){
    return(
    <nav className="fixed top-0 w-full bg-[#F1D302] z-10">
        <div className="flex justify-between fixed top-0 w-screen z-10">
            <Link className="p-8 hover:text-[#FFFFFF]" href={"/"}>
                Back
            </Link>
        </div>
    </nav>
    )
}