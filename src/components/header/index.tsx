import { Link } from "react-router-dom";
import { Nav } from "../nav";

export const Header = () => {
  return (
    <header className="absolute inset-x-auto top-0 flex h-20 w-full items-center justify-center border-b border-violet-400 bg-violet-200 px-4 xl:px-0">
      <div className="container mx-auto flex items-center justify-end sm:justify-between">
        <Link
          to="/"
          className="hidden text-2xl font-bold tracking-tight text-violet-800 sm:inline-block"
        >
          FrontEnd Fusion
        </Link>
        <Nav />
      </div>
    </header>
  );
};
