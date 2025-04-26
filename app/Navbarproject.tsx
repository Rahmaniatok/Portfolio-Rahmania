import Link from "next/link";

export default function Navbarproject() {
  return (
    <nav className="fixed top-0 w-full bg-[#F1D302] z-10">
      <div className="flex justify-between items-center w-full p-8">
        <Link className="hover:text-white" href="/">
          Back
        </Link>
      </div>
    </nav>
  );
}
