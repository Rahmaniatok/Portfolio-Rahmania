import Link from "next/link";
import Navbar from './Navbar';
import projects from "../../data/projects.json"; 


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
      <section id="about" className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] pt-[80px] md:pt-0 flex flex-col md:flex-row justify-around items-center">
        <img className="w-[225px] md:w-[480px]" src="/foto2.png"></img>
        <div className="content-center pl-8">
          <h3 className="text-2xl md:text-4xl font-sans font-semibold">About</h3>
          <h1 className="text-4xl md:text-6xl py-2 font-semibold font-sans">
              About Me?
          </h1>
          <a className="text-l md:text-xl font-sans">
            I am a Computer Science student at Gadjah Mada University (UGM), passionate about the dynamic realms of Data Science and Artificial Intelligence. With a robust skill set spanning data analysis, front-end development, and Android development, I thrive on bringing innovation to the digital landscape.  As a flexible and challenge-driven individual, I eagerly embrace opportunities to connect with others and explore new horizons. Excited to contribute my expertise and collaborate on cutting-edge projects, I am poised to make a meaningful impact in the world of technology and data.
            </a>
        </div>
      </section>
      <section id="skills" className="min-h-[100vh] px-[20px] md:px-[200px] lg:px-[200px] md:pt-0 flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-sans font-semibold text-center pt-[100px]">Skills</h3>
          <h1 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center">
              Data Science & Artificial Intelligence
          </h1>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap px-4 py-2">
              <img className="w-[80px] md:w-[120px] mx-4" src="/datascience/Python.png"></img>
              <img className="w-[80px] md:w-[120px] mx-4" src="/datascience/Tensorflow.png"></img>
              <img className="w-[80px] md:w-[120px] mx-4" src="/datascience/Numpy.png"></img>
              <img className="w-[80px] md:w-[120px] mx-4" src="/datascience/Opencv.png"></img>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center">
              Web Development
          </h1>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap px-4 py-2">
            <img className="w-[80px] md:w-[120px] mx-4" src="/webdev/HTML.png"></img>
            <img className="w-[80px] md:w-[120px] mx-4" src="/webdev/CSS.png"></img>
            <img className="w-[80px] md:w-[120px] mx-4" src="/webdev/Javascript.png"></img>
            <img className="w-[80px] md:w-[120px] mx-4" src="/webdev/My SQL.png"></img>
            <img className="w-[80px] md:w-[120px] mx-4" src="/webdev/Nextjs.png"></img>
          </div>
          </div>
          <h1 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center">
              Android Development
          </h1>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap px-4 py-2">
              <img className="w-[80px] md:w-[120px] mx-4" src="/android/Android Studio.png"></img>
              <img className="w-[80px] md:w-[120px] mx-4" src="/android/Kotlin.png"></img>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center">
              Programming Languages
          </h1>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap px-4 py-2">
              <img className="w-[80px] md:w-[120px] mx-4" src="/programming/Python.png"></img>
              <img className="w-[80px] md:w-[120px] mx-4" src="/programming/C++.png"></img>
            </div>
          </div>
      </section>
      <section id="projects">
        <div className="min-h-[50vh] pt-[100px]">
          <h3 className="text-2xl md:text-4xl font-sans font-semibold text-center">Projects</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap py-8">
            {projects.map((project, index) => (
              <Link href={project.link} key={index}>
                <div className="w-80 h-[280px] shadow-xl overflow-hidden rounded hover:bg-[#F1D302]">
                  <img
                    className="w-full md:w-[300px] object-contain mx-auto"
                    src={project.image}
                    alt={project.title}
                  />
                  <h4 className="text-l md:text-xl font-semibold font-sans text-center">
                    {project.title}
                  </h4>
                  <h4 className="text-l md:text-xl font-sans text-center">
                    {project.description}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-[50vh]">
        <h3 className="text-2xl md:text-4xl font-sans font-semibold text-center">Contact</h3>
        <h3 className="text-xl md:text-2xl font-sans text-center">Whatsapp : +62 856 0191 0415</h3>
        <h3 className="text-xl md:text-2xl font-sans text-center">Email : rahmania.rah2003@mail.ugm.ac.id</h3>
      </section>
    </main>
  )
}
