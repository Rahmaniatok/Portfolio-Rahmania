import Link from "next/link";

export default function Navbarproject (){
    return(
    <div className="flex justify-between fixed top-0 w-screen z-10">
            <Link className="p-8 hover:text-[#F1D302]" href={"/"}>
                Back
            </Link>
    </div>
    )
}