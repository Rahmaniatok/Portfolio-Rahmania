import projects from "../data/projects.json";
import Link from "next/link";
import Navbarproject from "../Navbarproject"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Salah, tidak nemu</div>;
  }

  return (
    <main>
        <Navbarproject />
        <div className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] pt-[100px]">
            <div className="flex flex-col items-center">
                {/* Gambar utama */}
                <div className="flex justify-center">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-[200px] md:w-[400px] mx-2" 
                    />
                </div>
                {/* Judul Project */}
                  <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    {project.title}
                  </h2>

                {/* Deskripsi */}
                <h4 className="text-l md:text-xl font-sans text-center">
                    {project.description}
                </h4>

                {/* Part yang dikerjakan */}
                <h2 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    What Part Did I Make?
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                  {project.partIMake}
                </h4>

                {/* Program Flow */}
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    Program Flow
                </h2>
                {project.programFlow.map((flow, index) => (
                  <div key={index} className="flex justify-center py-4 items-center w-full">
                    <div className="basis-1/2 flex justify-end">
                      <img 
                        className="h-[100px] md:h-[200px] mx-2" 
                        src={flow.image} 
                        alt={flow.description}
                      />
                    </div>
                  <div className="basis-1/2">
                    <h4 className="text-l md:text-xl font-sans text-left font-semibold">
                      {flow.description}
                    </h4>
                  </div>
              </div>
                    ))}

                    {/* Link ke project */}
                    <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                        You Can Access This Project Using Link:
                    </h2>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <h4 className="text-l md:text-xl font-sans text-center hover:text-blue-800 underline">
                            {project.link}
                        </h4>
                    </Link>
                </div>
            <div className="my-24"></div>
      </div>
    </main>
);
}