import Link from "next/link";
import Navbarproject from '../Navbarproject';


export default function Kucingkoding (){
    return(
        <main>
            <Navbarproject />
            <div className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[100px]">
                <div className="flex justify-center">
                    <img className="w-[200px] md:w-[400px] mx-2" src="/projects/kucingkoding.png"></img>
                </div>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    kucingkoding.com website
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                This project involved creating a website to store assignments. The framework used for this project was Next.js and Tailwind CSS. Unfortunately, this project has not been continued.
                </h4>
                <h2 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    What Part Did I Make?
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                I created the entire project.
                </h4>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    You Can Access This Project Using Link: 
                </h2>
                <Link href={"https://www.kucingkoding.com/"}>
                    <h4 className="text-l md:text-xl font-sans text-center hover:text-blue-800">
                    https://www.kucingkoding.com/
                    </h4>
                </Link>
                <div className="my-24"></div>
            </div>
        </main>
    )
}