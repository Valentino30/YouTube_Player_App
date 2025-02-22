import { Link } from "react-router";

export function NavigationMenu() {
  return (
    <nav className="fixed top-0 p-4 w-full">
      <ul className="flex justify-center gap-8">
        <li className="text-gray-500 hover:text-gray-700">
          <Link to="/">Home</Link>
        </li>
        <li className="text-gray-500 hover:text-gray-700">
          <Link to="/video">Video</Link>
        </li>
        <li className="text-gray-500 hover:text-gray-700">
          <Link to="/gif">GIF</Link>
        </li>
      </ul>
    </nav>
  );
}
