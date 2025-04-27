import Link from "next/link";
import Navbar from './Navbar';
import projects from "./data/projects.json"; 


export default function Home(){
  return(
    <main>
      <Navbar />
      <section id="home" className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] pt-[80px] md:pt-0 flex flex-col md:flex-row justify-around items-center">
        <div className="content-center">
          <h2 className="py-2 text-2xl text-center md:text-4xl font-sans flex justify-center">
            Hi! I am
          </h2>
          <h1 className="text-4xl text-center md:text-6xl py-2 font-semibold font-sans flex justify-center">
            Rahmania
          </h1>
          <h2 className="py-2 text-2xl text-center md:text-4xl font-sans flex justify-center">
            Welcome to my portofolio!
          </h2>
          <div className="flex justify-center p-4">
            <Link className="text-xl font-semibold rounded border  hover:text-white px-4 py-4 bg-[#F1D302]"
            href="https://drive.google.com/file/d/11CwwsbF13gzzfAl3NscA8yAajLkoyjGz/view?usp=sharing">Download CV</Link>
          </div>
        </div>
        <img className=" w-[225px] md:w-[480px]" src="/foto1.png"></img>
      </section>
    </main>
  )
}
