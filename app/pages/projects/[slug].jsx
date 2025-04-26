import projects from "../../data/projects.json";

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  return { props: { project } };
}

export default function ProjectDetail({ project }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="rounded-lg mb-6" />
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Visit Project
      </a>
    </div>
  );
}